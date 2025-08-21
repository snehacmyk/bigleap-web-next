"use client";

import { useEffect } from "react";
import styles from "../enquiry/enquiry.module.scss";
import Image from "next/image";
import CTAButton from "../ctaButton/page.jsx";

export default function EnquirySect() {
  useEffect(() => {
    // Dynamically import Bootstrap JS only on client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <section className={styles["enquiry-section"]}>
        <Image
          src="/enquiry.png"
          alt="Enquiry Background"
          width={1920}
          height={1080}
          className={styles.image}
        />
        <div className={styles.buttonContainer}>
          <CTAButton
            title="ENQUIRE NOW"
            isModal={true}
            modalTarget="#enquiryModal"
          />
        </div>
      </section>

      {/* Enquiry Modal */}
      <div
        className="modal fade"
        id="enquiryModal"
        aria-hidden="true"
        aria-labelledby="enquiryModalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="enquiryModalLabel">
                Enquiry Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
