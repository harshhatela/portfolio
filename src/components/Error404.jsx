import React from 'react';
import styles from '../styles/Error404.module.css';

const Error404 = ({ onClose, projectTitle }) => {
  return (
    <div className={styles.errorModal} onClick={onClose}>
      <div className={styles.errorContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.mainWrapper}>
          <div className={styles.main}>
            <div className={styles.antenna}>
              <div className={styles.antennaShadow} />
              <div className={styles.a1} />
              <div className={styles.a1d} />
              <div className={styles.a2} />
              <div className={styles.a2d} />
              <div className={styles.aBase} />
            </div>
            <div className={styles.tv}>
              <div className={styles.cruve}>
                <svg className={styles.curveSvg} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 189.929 189.929" xmlSpace="preserve">
                  <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
          C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
                </svg>
              </div>
              <div className={styles.displayDiv}>
                <div className={styles.screenOut}>
                  <div className={styles.screenOut1}>
                    <div className={styles.screen}>
                      <span className={styles.notfoundText}>NOT FOUND</span>
                    </div>
                    <div className={styles.screenM}>
                      <span className={styles.notfoundText}>NOT FOUND</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.lines}>
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
              </div>
              <div className={styles.buttonsDiv}>
                <div className={styles.b1}><div /></div>
                <div className={styles.b2} />
                <div className={styles.speakers}>
                  <div className={styles.g1}>
                    <div className={styles.g11} />
                    <div className={styles.g12} />
                    <div className={styles.g13} />
                  </div>
                  <div className={styles.g} />
                  <div className={styles.g} />
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.base1} />
              <div className={styles.base2} />
              <div className={styles.base3} />
            </div>
          </div>
          <div className={styles.text404}>
            <div className={styles.text4041}>4</div>
            <div className={styles.text4042}>0</div>
            <div className={styles.text4043}>4</div>
          </div>
        </div>

        <div className={styles.errorMessage}>
          <h2>Project Not Available</h2>
          <p>"{projectTitle}" is coming soon!</p>
          <p className={styles.subMessage}>This project is currently under development or not yet published.</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;