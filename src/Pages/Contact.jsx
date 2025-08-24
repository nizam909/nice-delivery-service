import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", pickup: "", drop: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    // TODO: Send to backend or email service; for now just simulate
    setSubmitted(true);
  }

  if (submitted)
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold">Thanks, {form.name || "there"}!</h1>
        <p className="mt-3 text-slate-600">
          Our team will contact you shortly to confirm your pickup.
        </p>
      </section>
    );

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold">Book a pickup / Contact us</h1>
      <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border">
        <input name="name" placeholder="Your Name" value={form.name} onChange={onChange} className="px-4 py-3 rounded-xl border" required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} className="px-4 py-3 rounded-xl border" required />
        <input name="pickup" placeholder="Pickup Address" value={form.pickup} onChange={onChange} className="px-4 py-3 rounded-xl border sm:col-span-2" required />
        <input name="drop" placeholder="Drop Address" value={form.drop} onChange={onChange} className="px-4 py-3 rounded-xl border sm:col-span-2" required />
        <textarea name="message" placeholder="Anything else?" value={form.message} onChange={onChange} className="px-4 py-3 rounded-xl border sm:col-span-2" rows={4} />
        <button className="px-5 py-3 rounded-2xl bg-black text-white font-medium hover:opacity-90 sm:col-span-2">
          Submit
        </button>
      </form>
    </section>
  );
}
