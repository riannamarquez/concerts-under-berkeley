'use client';

import { useState, useRef, useEffect } from 'react';

export default function Join() {
  const [toast, setToast] = useState('');
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    setToast(`Thanks, ${name}! We'll be in touch soon.`);
    setShowToast(true);
    formRef.current?.reset();
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowToast(false), 3500);
  }

  return (
    <>
      <section className="join" id="join">
        <div className="container">
          <div className="join-content">
            <div className="section-header">
              <span className="section-tag">Get Involved</span>
              <h2 className="section-title">Join Concerts Under Berkeley</h2>
              <p className="join-description">
                Whether you&apos;re a musician, a music lover, or just looking for a good time — there&apos;s a place for you here. Fill out the form and we&apos;ll be in touch!
              </p>
            </div>
            <form className="join-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@berkeley.edu" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="role">I&apos;m interested in...</label>
                <select id="role" name="role" required defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option value="performer">Performing at events</option>
                  <option value="organizing">Helping organize events</option>
                  <option value="attending">Attending shows</option>
                  <option value="all">All of the above!</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Anything else? (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about yourself, your favorite genres, instruments you play..."
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">Count Me In</button>
            </form>
          </div>
        </div>
      </section>

      <div className={`toast${showToast ? ' show' : ''}`}>{toast}</div>
    </>
  );
}
