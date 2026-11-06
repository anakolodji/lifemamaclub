(function () {
  const form = document.getElementById('formulario');
  if (!form) return;

  const steps = Array.from(form.querySelectorAll('.form-step'));
  const progressItems = Array.from(document.querySelectorAll('.progress-list li'));
  const progressValue = document.querySelector('.progress-value');
  const status = document.getElementById('form-status');
  const endpointMeta = document.querySelector('meta[name="partner-form-endpoint"]');
  let activeStep = 0;

  function clearStatus() {
    status.hidden = true;
    status.textContent = '';
    status.classList.remove('success');
  }

  function showStatus(message, isSuccess) {
    status.textContent = message;
    status.classList.toggle('success', Boolean(isSuccess));
    status.hidden = false;
    status.focus({ preventScroll: true });
  }

  function setStep(index, moveFocus) {
    activeStep = Math.max(0, Math.min(index, steps.length - 1));
    steps.forEach(function (step, stepIndex) { step.hidden = stepIndex !== activeStep; });
    progressItems.forEach(function (item, itemIndex) {
      if (itemIndex === activeStep) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
    progressValue.style.width = ((activeStep + 1) / steps.length * 100) + '%';
    clearStatus();

    if (moveFocus) {
      form.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      const legend = steps[activeStep].querySelector('legend strong');
      if (legend) {
        legend.setAttribute('tabindex', '-1');
        window.setTimeout(function () { legend.focus({ preventScroll: true }); }, 250);
      }
    }
  }

  function groupIsValid(step) {
    let valid = true;
    step.querySelectorAll('[data-required-group]').forEach(function (group) {
      const checked = group.querySelector('input[type="checkbox"]:checked');
      let error = group.querySelector('.field-error');
      if (!checked) {
        valid = false;
        if (!error) {
          error = document.createElement('p');
          error.className = 'field-error';
          error.setAttribute('role', 'alert');
          error.textContent = 'Selecione pelo menos uma possibilidade para continuar.';
          group.appendChild(error);
        }
      } else if (error) {
        error.remove();
      }
    });
    return valid;
  }

  function validateStep(step) {
    const groupValid = groupIsValid(step);
    const fields = Array.from(step.querySelectorAll('input, select, textarea'));
    const invalidField = fields.find(function (field) { return !field.checkValidity(); });
    if (invalidField) {
      invalidField.reportValidity();
      invalidField.focus();
      return false;
    }
    if (!groupValid) {
      const group = step.querySelector('[data-required-group]');
      const firstChoice = group && group.querySelector('input');
      if (firstChoice) firstChoice.focus();
      return false;
    }
    return true;
  }

  form.querySelectorAll('[data-next]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (!validateStep(steps[activeStep])) return;
      setStep(activeStep + 1, true);
    });
  });

  form.querySelectorAll('[data-back]').forEach(function (button) {
    button.addEventListener('click', function () { setStep(activeStep - 1, true); });
  });

  form.querySelectorAll('[data-required-group] input').forEach(function (input) {
    input.addEventListener('change', function () { groupIsValid(input.closest('[data-required-group]').closest('.form-step')); });
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    clearStatus();
    if (!validateStep(steps[activeStep])) return;

    const endpoint = (window.LIFE_MAMA_PARTNER_ENDPOINT || (endpointMeta && endpointMeta.content) || '').trim();
    if (!endpoint) {
      showStatus('O canal de envio ainda não está configurado. Sua proposta não foi enviada. Tente novamente mais tarde.', false);
      console.warn('Configure meta[name="partner-form-endpoint"] or window.LIFE_MAMA_PARTNER_ENDPOINT before publishing.');
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalLabel = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    submitButton.textContent = 'Enviando proposta…';

    const payload = new FormData(form);
    payload.append('formulario', 'Candidatura para marcas parceiras');
    payload.append('enviado_em', new Date().toISOString());

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
        credentials: 'omit'
      });
      if (!response.ok) throw new Error('Submission failed with HTTP ' + response.status);

      form.reset();
      document.getElementById('application-view').hidden = true;
      const successView = document.getElementById('success-view');
      successView.hidden = false;
      document.title = 'Proposta recebida — Life Mama Club';
      window.scrollTo({ top: 0, behavior: 'auto' });
      const heading = successView.querySelector('h1');
      if (heading) heading.focus({ preventScroll: true });
    } catch (error) {
      console.error(error);
      showStatus('Não foi possível enviar sua proposta agora. Nenhum dado foi confirmado como recebido. Verifique sua conexão e tente novamente.', false);
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      submitButton.innerHTML = originalLabel;
    }
  });

  setStep(0, false);
})();
