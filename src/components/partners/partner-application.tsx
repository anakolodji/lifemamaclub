"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

import {
  buttonClass,
  container,
  containerBase,
  display,
  eyebrow,
  prose,
  smallNote,
} from "@/components/partners/styles";
import { cn } from "@/lib/cn";

/** Where proposals are POSTed (as multipart form data). Leave empty to keep the form disabled. */
const ENDPOINT = (process.env.NEXT_PUBLIC_PARTNER_FORM_ENDPOINT ?? "").trim();

const STEPS = ["Sobre sua marca", "Sobre você", "Sobre a parceria", "Finalização"];

const COLLABORATION_TYPES: Array<{ value: string; label: string }> = [
  { value: "Patrocinar experiências ou eventos", label: "Patrocinar experiências ou eventos" },
  { value: "Realizar ativações de marca", label: "Realizar ativações de marca" },
  { value: "Apresentar produtos ou serviços", label: "Apresentar produtos ou serviços" },
  { value: "Receber a comunidade no meu espaço", label: "Receber a comunidade no meu espaço" },
  { value: "Cocriar uma experiência exclusiva", label: "Cocriar uma experiência exclusiva" },
  { value: "Oferecer benefícios às integrantes", label: "Oferecer benefícios às integrantes" },
  { value: "Construir uma parceria contínua", label: "Construir uma parceria contínua" },
  { value: "Desenvolver um projeto especial", label: "Desenvolver um projeto especial" },
  {
    value: "Tenho uma ideia diferente",
    label: "Tenho uma ideia diferente e gostaria de compartilhar",
  },
  { value: "Ainda não sei", label: "Ainda não sei; gostaria de conhecer as possibilidades" },
];

const MESSAGES = {
  notConfigured:
    "O canal de envio ainda não está configurado. Sua proposta não foi enviada. Tente novamente mais tarde.",
  failed:
    "Não foi possível enviar sua proposta agora. Nenhum dado foi confirmado como recebido. Verifique sua conexão e tente novamente.",
};

const fieldClass = "flex min-w-0 flex-col gap-2.5";
const labelClass = "text-[14px] font-bold text-cafe-900";
const hintClass = "m-0 -mt-[3px] text-[12px] leading-[1.5] text-cafe-600";
const controlClass =
  "w-full rounded-none border border-cafe-900/32 bg-white text-[16px] text-cafe-900 focus:border-cafe-900 focus:shadow-[0_0_0_2px_rgba(53,40,32,.11)] focus:outline-none";
const inputClass = cn(controlClass, "min-h-[52px] px-[15px] py-0");
const textareaClass = cn(controlClass, "min-h-[132px] resize-y px-[15px] py-3.5");

function Required() {
  return <span className="text-argila-500">*</span>;
}

function StepLegend({ step, title }: { step: number; title: string }) {
  return (
    <legend className="m-0 mb-[42px] w-full border-b border-cafe-900/16 p-0 pb-6">
      <span className="mb-2.5 block text-[11px] font-bold tracking-[.17em] text-argila-500 uppercase">
        {String(step).padStart(2, "0")} — {STEPS[step - 1]}
      </span>
      <strong
        tabIndex={-1}
        className="font-serif text-[38px] leading-[1.1] font-normal lte820:text-[32px]"
      >
        {title}
      </strong>
    </legend>
  );
}

function StepActions({
  first,
  onBack,
  onNext,
}: {
  first?: boolean;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mt-11 flex items-center justify-between gap-[18px] border-t border-cafe-900/16 pt-7 lte820:flex-col-reverse lte820:items-stretch">
      {first ? (
        <span />
      ) : (
        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer border-0 bg-transparent text-[14px] font-bold text-cafe-600 lte820:min-h-11"
        >
          ← Voltar
        </button>
      )}
      <button type="button" onClick={onNext} className={buttonClass("clay", "lte820:w-full")}>
        Continuar <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

function Field({ full, children }: { full?: boolean; children: ReactNode }) {
  return <div className={cn(fieldClass, full && "col-span-full")}>{children}</div>;
}

// `.field input` rules of the original also reach these checkboxes (hence the 52px min-height).
const consentCheckboxClass =
  "mx-0 mt-1 mb-0 h-[18px] min-h-[52px] w-[18px] rounded-none border border-cafe-900/32 bg-white px-[15px] py-0 text-[16px] text-cafe-900 accent-argila-500 focus:border-cafe-900 focus:shadow-[0_0_0_2px_rgba(53,40,32,.11)] focus:outline-none";

const fieldGridClass = "grid grid-cols-2 gap-x-[26px] gap-y-[30px] lte820:grid-cols-1";

export function PartnerApplication() {
  const [step, setStep] = useState(0);
  const [focusStep, setFocusStep] = useState(false);
  const [collaborationError, setCollaborationError] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const stepRefs = useRef<Array<HTMLFieldSetElement | null>>([]);
  const collaborationRef = useRef<HTMLFieldSetElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // After moving between steps, bring the form into view and focus the new step's title.
  useEffect(() => {
    if (!focusStep) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    formRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    const timer = window.setTimeout(() => {
      stepRefs.current[step]
        ?.querySelector<HTMLElement>("legend strong")
        ?.focus({ preventScroll: true });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [focusStep, step]);

  useEffect(() => {
    if (status) statusRef.current?.focus({ preventScroll: true });
  }, [status]);

  useEffect(() => {
    if (!submitted) return;
    document.title = "Proposta recebida — Life Mama Club";
    window.scrollTo({ top: 0, behavior: "auto" });
    successHeadingRef.current?.focus({ preventScroll: true });
  }, [submitted]);

  function goToStep(index: number) {
    setStep(Math.max(0, Math.min(index, STEPS.length - 1)));
    setFocusStep(true);
    setStatus(null);
  }

  function hasCollaboration() {
    return Boolean(collaborationRef.current?.querySelector("input:checked"));
  }

  /** Same checks the browser would run, limited to the fields of the current step. */
  function validateStep(index: number) {
    const fieldset = stepRefs.current[index];
    if (!fieldset) return true;

    const groupInStep = Boolean(
      collaborationRef.current && fieldset.contains(collaborationRef.current),
    );
    const groupValid = !groupInStep || hasCollaboration();
    if (groupInStep) setCollaborationError(!groupValid);

    const fields = Array.from(
      fieldset.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        "input, select, textarea",
      ),
    );
    const invalidField = fields.find((field) => !field.checkValidity());
    if (invalidField) {
      invalidField.reportValidity();
      invalidField.focus();
      return false;
    }
    if (!groupValid) {
      collaborationRef.current?.querySelector("input")?.focus();
      return false;
    }
    return true;
  }

  function next() {
    if (validateStep(step)) goToStep(step + 1);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus(null);
    if (!validateStep(step)) return;

    if (!ENDPOINT) {
      setStatus(MESSAGES.notConfigured);
      console.warn("Set NEXT_PUBLIC_PARTNER_FORM_ENDPOINT before publishing the partner form.");
      return;
    }

    const payload = new FormData(form);
    payload.append("formulario", "Candidatura para marcas parceiras");
    payload.append("enviado_em", new Date().toISOString());

    setSubmitting(true);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
        credentials: "omit",
      });
      if (!response.ok) throw new Error(`Submission failed with HTTP ${response.status}`);
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setStatus(MESSAGES.failed);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section id="application-view" hidden={submitted}>
        <div className="pt-20 pb-[58px] lte820:pt-16">
          <div className={cn(container, "grid grid-cols-12 gap-8 lte820:grid-cols-1")}>
            <div className="col-[1/span_7] lte820:col-1">
              <p className={cn(eyebrow, "text-argila-500")}>Parcerias &amp; Colaborações</p>
              <h1 className="m-0 font-serif text-[clamp(48px,5vw,70px)] leading-[.98] font-normal tracking-[-.025em]">
                Vamos criar algo significativo juntas?
              </h1>
              <p className="m-0 mt-7 text-[clamp(19px,2vw,24px)] leading-[1.5]">
                Toda marca tem uma história, uma essência e algo próprio para compartilhar. Queremos
                conhecer a sua.
              </p>
              <p className="mt-7 inline-flex items-center gap-2.5 text-[13px] font-bold before:h-2 before:w-2 before:rounded-full before:bg-oliva-600 before:content-['']">
                Leva aproximadamente 3 a 5 minutos.
              </p>
            </div>
            <div className="col-[9/span_4] self-end border-t border-cafe-900/16 pt-7 pr-0 pb-1 pl-0 text-cafe-600 lte820:col-1 lte820:mt-4">
              <p>
                Conte um pouco sobre sua empresa, seus interesses e as possibilidades de colaboração
                que imagina para o Life Mama Club.
              </p>
              <p>
                Nossa equipe avaliará cada proposta com atenção, buscando conexões que façam sentido
                para a marca e para a comunidade.
              </p>
            </div>
          </div>
        </div>

        <div
          className={cn(
            container,
            "grid grid-cols-[270px_minmax(0,1fr)] items-start gap-18 pb-30 lte1080:grid-cols-[220px_minmax(0,1fr)] lte1080:gap-10 lte820:grid-cols-1 lte820:gap-[30px] lte820:pb-20",
          )}
        >
          <aside aria-label="Progresso da candidatura" className="sticky top-30 lte820:static">
            <h2 className="m-0 mb-6 font-serif text-[25px] font-normal lte820:hidden">
              Sua candidatura
            </h2>
            <div
              aria-hidden="true"
              className="mb-7 h-[3px] overflow-hidden bg-cafe-900/13 lte820:m-0"
            >
              <div
                className="h-full bg-argila-500 transition-[width] duration-350 ease-lmc"
                style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              />
            </div>
            <ol className="m-0 flex list-none flex-col gap-[15px] p-0 lte820:hidden">
              {STEPS.map((label, index) => (
                <li
                  key={label}
                  aria-current={index === step ? "step" : undefined}
                  className="grid grid-cols-[28px_1fr] gap-2.5 text-[13px] text-cafe-600 aria-[current=step]:font-bold aria-[current=step]:text-cafe-900"
                >
                  <span className="font-serif">{String(index + 1).padStart(2, "0")}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ol>
          </aside>

          <form
            ref={formRef}
            id="formulario"
            method="post"
            noValidate
            onSubmit={onSubmit}
            className="min-w-0 bg-white p-[50px] shadow-[0_20px_60px_rgba(53,40,32,.07)] lte820:px-6 lte820:py-8"
          >
            <fieldset
              ref={(element) => {
                stepRefs.current[0] = element;
              }}
              hidden={step !== 0}
              className="m-0 border-0 p-0"
            >
              <StepLegend step={1} title="Queremos conhecer sua empresa." />
              <div className={fieldGridClass}>
                <Field>
                  <label htmlFor="marca" className={labelClass}>
                    Nome da empresa ou marca <Required />
                  </label>
                  <p className={hintClass}>Como sua marca é conhecida?</p>
                  <input
                    id="marca"
                    name="marca"
                    type="text"
                    autoComplete="organization"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field>
                  <label htmlFor="site" className={labelClass}>
                    Site ou Instagram <Required />
                  </label>
                  <p className={hintClass}>Onde podemos conhecer melhor sua empresa?</p>
                  <input
                    id="site"
                    name="site_ou_instagram"
                    type="text"
                    inputMode="url"
                    placeholder="https:// ou @perfil"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field>
                  <label htmlFor="segmento" className={labelClass}>
                    Segmento de atuação <Required />
                  </label>
                  <p className={hintClass}>Selecione a área que mais representa sua marca.</p>
                  <select
                    id="segmento"
                    name="segmento"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Selecione</option>
                    <option>Bem-estar e autocuidado</option>
                    <option>Esporte e movimento</option>
                    <option>Moda, beleza e lifestyle</option>
                    <option>Arte, cultura e criatividade</option>
                    <option>Gastronomia e hospitalidade</option>
                    <option>Educação e desenvolvimento</option>
                    <option>Carreira, negócios e tecnologia</option>
                    <option>Viagens e experiências</option>
                    <option>Outro</option>
                  </select>
                </Field>
                <Field>
                  <label htmlFor="cidade" className={labelClass}>
                    Cidade e estado onde a empresa atua <Required />
                  </label>
                  <p className={hintClass}>Ex.: São Paulo, SP</p>
                  <input
                    id="cidade"
                    name="cidade_estado"
                    type="text"
                    autoComplete="address-level2"
                    required
                    className={inputClass}
                  />
                </Field>
              </div>
              <StepActions first onBack={() => goToStep(step - 1)} onNext={next} />
            </fieldset>

            <fieldset
              ref={(element) => {
                stepRefs.current[1] = element;
              }}
              hidden={step !== 1}
              className="m-0 border-0 p-0"
            >
              <StepLegend step={2} title="Quem conduz esta conversa?" />
              <div className={fieldGridClass}>
                <Field>
                  <label htmlFor="responsavel" className={labelClass}>
                    Nome da pessoa responsável <Required />
                  </label>
                  <input
                    id="responsavel"
                    name="nome_responsavel"
                    type="text"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field>
                  <label htmlFor="cargo" className={labelClass}>
                    Cargo ou função na empresa <Required />
                  </label>
                  <input
                    id="cargo"
                    name="cargo"
                    type="text"
                    autoComplete="organization-title"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field>
                  <label htmlFor="email" className={labelClass}>
                    E-mail profissional <Required />
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field>
                  <label htmlFor="whatsapp" className={labelClass}>
                    WhatsApp para contato <Required />
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(11) 90000-0000"
                    required
                    className={inputClass}
                  />
                </Field>
              </div>
              <StepActions onBack={() => goToStep(step - 1)} onNext={next} />
            </fieldset>

            <fieldset
              ref={(element) => {
                stepRefs.current[2] = element;
              }}
              hidden={step !== 2}
              className="m-0 border-0 p-0"
            >
              <StepLegend step={3} title="O que podemos construir juntas?" />
              <div className={fieldGridClass}>
                <fieldset ref={collaborationRef} className="col-span-full m-0 border-0 p-0">
                  {/* The step legend styles also reach this legend's asterisk, which sits on its own line. */}
                  <legend className="m-0 mb-2 w-full border-0 p-0 font-sans text-[14px] font-bold">
                    Que tipo de colaboração você imagina com o Life Mama Club?{" "}
                    <span className="mb-2.5 block text-[11px] font-bold tracking-[.17em] text-argila-500 uppercase">
                      *
                    </span>
                  </legend>
                  <p className={hintClass}>Você pode selecionar mais de uma possibilidade.</p>
                  <div className="mt-[18px] grid grid-cols-2 gap-2.5 lte820:grid-cols-1">
                    {COLLABORATION_TYPES.map(({ value, label }) => (
                      <label
                        key={value}
                        className="relative flex min-h-[52px] cursor-pointer items-center gap-3 border border-cafe-900/25 px-3.5 py-3 hover:border-cafe-900"
                      >
                        <input
                          type="checkbox"
                          name="tipo_colaboracao"
                          value={value}
                          onChange={() => setCollaborationError(!hasCollaboration())}
                          className="m-0 h-[18px] w-[18px] flex-[0_0_auto] accent-argila-500"
                        />
                        <span className="text-[13px] leading-[1.45]">{label}</span>
                      </label>
                    ))}
                  </div>
                  {collaborationError && (
                    <p role="alert" className="m-0 mt-2 text-[12px] font-bold text-[#8c2f24]">
                      Selecione pelo menos uma possibilidade para continuar.
                    </p>
                  )}
                </fieldset>
                <Field full>
                  <label htmlFor="objetivo" className={labelClass}>
                    O que você gostaria de alcançar com essa parceria? <Required />
                  </label>
                  <p className={hintClass}>
                    Conte brevemente o que motivou seu interesse em se conectar com o Life Mama
                    Club.
                  </p>
                  <textarea
                    id="objetivo"
                    name="objetivo_parceria"
                    required
                    className={textareaClass}
                  />
                </Field>
                <Field full>
                  <label htmlFor="oferta" className={labelClass}>
                    O que sua marca gostaria de oferecer ou construir junto à comunidade?
                  </label>
                  <p className={hintClass}>
                    Pode ser uma experiência, produto, serviço, espaço, conhecimento ou uma ideia
                    que ainda está tomando forma.
                  </p>
                  <textarea id="oferta" name="oferta_para_comunidade" className={textareaClass} />
                </Field>
                <Field full>
                  <label htmlFor="periodo" className={labelClass}>
                    Existe algum período ou evento de interesse?
                  </label>
                  <p className={hintClass}>
                    Opcional. Caso tenha alguma data ou campanha em mente, compartilhe conosco.
                  </p>
                  <textarea id="periodo" name="periodo_evento" className={textareaClass} />
                </Field>
                <Field full>
                  <label htmlFor="recursos" className={labelClass}>
                    Sua empresa já tem um investimento ou recurso previsto para essa colaboração?
                  </label>
                  <p className={hintClass}>Opcional.</p>
                  <select
                    id="recursos"
                    name="recursos_previstos"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Selecione</option>
                    <option>Temos orçamento para patrocínio ou ativações</option>
                    <option>Podemos oferecer produtos ou serviços</option>
                    <option>Podemos disponibilizar um espaço</option>
                    <option>Podemos combinar investimento e outras contribuições</option>
                    <option>Ainda estamos avaliando as possibilidades</option>
                    <option>Prefiro conversar sobre isso posteriormente</option>
                  </select>
                </Field>
              </div>
              <StepActions onBack={() => goToStep(step - 1)} onNext={next} />
            </fieldset>

            <fieldset
              ref={(element) => {
                stepRefs.current[3] = element;
              }}
              hidden={step !== 3}
              className="m-0 border-0 p-0"
            >
              <StepLegend step={4} title="Últimos detalhes." />
              <div className={fieldGridClass}>
                <Field full>
                  <label htmlFor="origem" className={labelClass}>
                    Como conheceu o Life Mama Club?
                  </label>
                  <select id="origem" name="origem" defaultValue="" className={inputClass}>
                    <option value="">Selecione</option>
                    <option>Instagram</option>
                    <option>Evento Life Mama</option>
                    <option>Indicação</option>
                    <option>Aplicativo Life Mama</option>
                    <option>Busca na internet</option>
                    <option>Outro</option>
                  </select>
                </Field>
                <div className={cn(fieldClass, "col-span-full gap-[17px]")}>
                  <label className="grid grid-cols-[20px_1fr] items-start gap-3 text-[14px] font-bold text-cafe-900">
                    <input
                      type="checkbox"
                      name="consentimento"
                      required
                      className={consentCheckboxClass}
                    />
                    <span className="text-[13px] leading-[1.6]">
                      Li a{" "}
                      <a
                        href="https://lifemama.app/pt-br/privacy-policy.html"
                        target="_blank"
                        rel="noopener"
                      >
                        Política de Privacidade
                      </a>{" "}
                      e concordo com o tratamento dos dados fornecidos para análise da candidatura e
                      eventual contato relacionado à proposta de parceria. <Required />
                    </span>
                  </label>
                  <label className="grid grid-cols-[20px_1fr] items-start gap-3 text-[14px] font-bold text-cafe-900">
                    <input type="checkbox" name="comunicacoes" className={consentCheckboxClass} />
                    <span className="text-[13px] leading-[1.6]">
                      Gostaria de receber novidades e informações sobre futuras oportunidades de
                      parceria com a Life Mama.
                    </span>
                  </label>
                </div>
              </div>
              <div className="mt-11 flex items-center justify-between gap-[18px] border-t border-cafe-900/16 pt-7 lte820:flex-col-reverse lte820:items-stretch">
                <button
                  type="button"
                  onClick={() => goToStep(step - 1)}
                  className="cursor-pointer border-0 bg-transparent text-[14px] font-bold text-cafe-600 lte820:min-h-11"
                >
                  ← Voltar
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting || undefined}
                  className={buttonClass("olive", "lte820:w-full")}
                >
                  {submitting ? (
                    "Enviando proposta…"
                  ) : (
                    <>
                      Enviar minha proposta <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </div>
              <p className={smallNote}>
                O envio da candidatura é gratuito e não gera compromisso comercial. As propostas
                serão analisadas individualmente, conforme o alinhamento com o Club e as
                oportunidades disponíveis.
              </p>
            </fieldset>
            <p
              ref={statusRef}
              id="form-status"
              role="alert"
              tabIndex={-1}
              hidden={!status}
              className="m-0 mt-[22px] border-l-[3px] border-argila-500 bg-argila-500/8 px-4 py-3.5 text-[13px] text-[#7d2f25]"
            >
              {status}
            </p>
          </form>
        </div>
      </section>

      <section
        id="success-view"
        hidden={!submitted}
        className="min-h-[calc(100vh-88px)] bg-argila-500 py-[100px] text-white lte820:py-[76px]"
      >
        <div className={cn(containerBase, "max-w-[840px]")}>
          <p className={cn(eyebrow, "text-white")}>Parcerias &amp; Colaborações</p>
          <h1 ref={successHeadingRef} tabIndex={-1} className={cn(display, "max-w-[10em]")}>
            Sua proposta foi recebida.
          </h1>
          <div className={cn(prose, "mt-[34px] max-w-[650px]")}>
            <p>Obrigada por compartilhar um pouco do universo da sua marca conosco.</p>
            <p>
              Nossa equipe avaliará as informações enviadas e poderá entrar em contato caso
              identifique uma oportunidade de colaboração.
            </p>
            <p>
              Acreditamos que grandes experiências começam quando pessoas e ideias se encontram.
            </p>
          </div>
          <div className="mt-[46px] border-t border-white/35 pt-[30px]">
            <strong>Life Mama Club</strong>
            <br />
            <em>Conexões que ampliam a vida.</em>
          </div>
          <Link href="/" prefetch={false} className={buttonClass("light", "mt-[38px]")}>
            Voltar ao Life Mama Club <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
