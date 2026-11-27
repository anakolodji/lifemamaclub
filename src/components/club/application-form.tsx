"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

import { buttonClassName, ButtonArrow } from "@/components/club/button-link";
import { PlaceholderLink } from "@/components/club/placeholder-link";
import { cn } from "@/lib/cn";

const DIMENSIONS = [
  "Conexões e amizades",
  "Carreira e negócios",
  "Bem-estar",
  "Esporte",
  "Criatividade",
  "Cultura",
  "Desenvolvimento pessoal",
];

const labelClass = "text-[14px] leading-[1.4] font-semibold text-cafe-900";
const controlClass =
  "box-border min-h-[52px] w-full rounded-none border border-cafe-900/15 bg-white px-4 py-3 font-ui text-[16px] leading-[1.5] text-cafe-900 transition-[border-color] duration-350 ease-[ease] placeholder:text-cafe-600 hover:border-cafe-900/60 focus-visible:border-cafe-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-900";
const textareaClass = cn(controlClass, "min-h-[140px] resize-y leading-[1.6]");
const hintClass = "text-[13px] leading-[1.5] font-medium text-cafe-600";

/** Required-field asterisk; only field labels colour it, elsewhere it takes the text colour. */
function Required({ accent = false }: { accent?: boolean }) {
  return (
    <span aria-hidden="true" className={accent ? "text-argila-500" : undefined}>
      *
    </span>
  );
}

function Field({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid gap-2", className)}>{children}</div>;
}

function Checkbox({
  name,
  required,
  children,
}: {
  name: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="relative grid max-w-[40em] cursor-pointer grid-cols-[20px_1fr] items-start gap-3">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="peer absolute inset-[0_auto_auto_0] m-0 h-5 w-5 opacity-0"
      />
      <span
        aria-hidden="true"
        className="relative mt-0.5 box-border h-5 w-5 rounded-xs border border-cafe-900/60 bg-white transition-[background-color,border-color] duration-350 ease-[ease] peer-checked:border-cafe-900 peer-checked:bg-cafe-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-cafe-900 peer-checked:after:absolute peer-checked:after:top-0.5 peer-checked:after:left-1.5 peer-checked:after:h-2.5 peer-checked:after:w-[5px] peer-checked:after:rotate-45 peer-checked:after:[border-width:0_2px_2px_0] peer-checked:after:border-solid peer-checked:after:border-white peer-checked:after:content-['']"
      />
      <span className="text-[15px] leading-[1.6] text-cafe-900">{children}</span>
    </label>
  );
}

export function ApplicationForm({ className }: { className?: string }) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState<string[]>([]);
  const [dimensionError, setDimensionError] = useState(false);
  const firstDimension = useRef<HTMLButtonElement>(null);

  function toggleDimension(label: string) {
    setDimensions((selected) =>
      selected.includes(label) ? selected.filter((item) => item !== label) : [...selected, label],
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hasDimension = dimensions.length > 0;
    setDimensionError(!hasDimension);
    if (!hasDimension) {
      firstDimension.current?.focus();
      return;
    }
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    router.push("/confirmacao");
  }

  return (
    <form className={className} action="#" method="post" onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-8 lte900:grid-cols-1">
        <Field>
          <label htmlFor="nome" className={labelClass}>
            Nome completo <Required accent />
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            className={controlClass}
          />
        </Field>
        <Field>
          <label htmlFor="email" className={labelClass}>
            E-mail <Required accent />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={controlClass}
          />
        </Field>
        <Field>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp <Required accent />
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            required
            className={controlClass}
          />
        </Field>
        <Field>
          <label htmlFor="cidade" className={labelClass}>
            Cidade e estado <Required accent />
          </label>
          <input
            id="cidade"
            name="cidade"
            type="text"
            autoComplete="address-level2"
            placeholder="São Paulo, SP"
            required
            className={controlClass}
          />
        </Field>
      </div>

      <Field>
        <label htmlFor="area" className={labelClass}>
          Área de atuação profissional <Required accent />
        </label>
        <input
          id="area"
          name="area"
          type="text"
          autoComplete="organization-title"
          required
          className={controlClass}
        />
      </Field>

      <Field>
        <label htmlFor="momento" className={labelClass}>
          Como você descreveria seu momento atual? <Required accent />
        </label>
        <textarea id="momento" name="momento" rows={4} required className={textareaClass} />
        <p className={hintClass}>Vida, trabalho, projetos — o que fizer sentido para você.</p>
      </Field>

      <fieldset className="m-0 grid gap-3.5 border-0 p-0">
        <legend className="mb-1 p-0 text-[14px] leading-[1.4] font-semibold text-cafe-900">
          Quais dimensões da sua vida gostaria de desenvolver? <Required />
        </legend>
        <p className={hintClass}>Selecione quantas quiser.</p>
        <div
          role="group"
          aria-label="Dimensões da vida"
          aria-describedby={dimensionError ? "dimension-error" : undefined}
          className="flex flex-wrap gap-3"
        >
          {DIMENSIONS.map((label, index) => {
            const selected = dimensions.includes(label);
            return (
              <button
                key={label}
                ref={index === 0 ? firstDimension : undefined}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleDimension(label)}
                className={cn(
                  "min-h-11 cursor-pointer rounded-full border px-6 py-0 font-ui text-[15px] font-medium transition-[background-color,color,border-color] duration-350 ease-[ease]",
                  selected
                    ? "border-cafe-900 bg-cafe-900 text-areia-100"
                    : "border-cafe-900/60 bg-white text-cafe-900 hover:border-cafe-900",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
        {dimensionError && (
          <p
            id="dimension-error"
            role="alert"
            className="mt-3 text-[14px] leading-[1.5] font-semibold text-[#8c2f24]"
          >
            Selecione pelo menos uma dimensão para continuar.
          </p>
        )}
      </fieldset>

      <Field>
        <label htmlFor="interesse" className={labelClass}>
          O que despertou seu interesse pelo Life Mama Club? <Required accent />
        </label>
        <textarea id="interesse" name="interesse" rows={4} required className={textareaClass} />
      </Field>

      <Field>
        <label htmlFor="contribuir" className={labelClass}>
          O que você gostaria de compartilhar ou contribuir com a comunidade?
        </label>
        <textarea id="contribuir" name="contribuir" rows={4} className={textareaClass} />
      </Field>

      <Field className="max-w-[24em]">
        <label htmlFor="origem" className={labelClass}>
          Como conheceu o Club?
        </label>
        <select id="origem" name="origem" className={cn(controlClass, "appearance-none bg-none")}>
          <option value="">Selecione</option>
          <option value="instagram">Instagram</option>
          <option value="indicacao">Indicação de uma amiga</option>
          <option value="experience">Life Mama Experience</option>
          <option value="app">Aplicativo Life Mama</option>
          <option value="outro">Outro</option>
        </select>
      </Field>

      <div className="flex flex-col gap-5 border-t border-cafe-900/15 pt-8">
        <Checkbox name="consentimento" required>
          Li e concordo com o tratamento dos meus dados de candidatura conforme a{" "}
          <PlaceholderLink>Política de Privacidade</PlaceholderLink>. <Required />
        </Checkbox>
        <Checkbox name="comunicacoes">
          Quero receber comunicações da Life Mama sobre experiências e novidades do Club. Opcional —
          não é condição para a candidatura.
        </Checkbox>
      </div>

      <div className="flex flex-wrap items-center gap-x-10 gap-y-5 pt-2">
        <button type="submit" className={buttonClassName("primary")}>
          Enviar candidatura <ButtonArrow />
        </button>
        <p className="max-w-[26em] text-[13px] leading-[1.5] font-medium text-cafe-600">
          Campos marcados com <Required /> são obrigatórios.
        </p>
      </div>
    </form>
  );
}
