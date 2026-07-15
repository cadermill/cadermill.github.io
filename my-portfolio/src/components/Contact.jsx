import { useState } from "react";
import { colors } from "../design-system/tokens/colors";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    comment: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;
    const body =
      `${form.comment}`;

    window.location.href =
      `mailto:cadenrxmiller@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id = "contact"
      className={`
        px-6 py-10 border-t
        ${colors.bg.base}
        ${colors.border.subtle}
        ${colors.text.primary}
      `}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">
          Get In Touch
        </h2>

        <p className={`${colors.text.secondary} mb-8`}>
          Send me an email through this form or directly to cadenrxmiller@gmail.com
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="space-y-2">
            <label
              htmlFor="name"
              className={`text-sm font-medium ${colors.text.secondary}`}
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`
                w-full px-4 py-3 rounded-lg
                ${colors.bg.surface}
                border ${colors.border.default}
                ${colors.text.primary}
              `}
            />
          </div>


          <div className="space-y-2">
            <label
              htmlFor="message"
              className={`text-sm font-medium ${colors.text.secondary}`}
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg ${colors.bg.surface} border ${colors.border.subtle} resize-none`}
            />
          </div>

          <button
            type="submit"
            className={`
              px-6 py-3 rounded-lg font-medium transition
              ${colors.accent.primary}
              border border-transparent
              hover:bg-transparent
              ${colors.accent.textHover}
              ${colors.accent.borderHover}
              hover:scale-105
              text-black
              cursor-pointer
            `}
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}