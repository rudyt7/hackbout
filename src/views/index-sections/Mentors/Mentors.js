import React from 'react';
import { Container, Card } from 'reactstrap';

import mOne from '../../../assets/img/kanirudh.jpg';
import mTwo from '../../../assets/img/Manav.jpg';
import mThree from '../../../assets/img/mThree.jpeg';
import mFour from '../../../assets/img/vasanth.jpg';
import mFive from '../../../assets/img/karthikeyan.jpg';
import mSix from '../../../assets/img/himanshu.jpg';
import mSeven from '../../../assets/img/kalai.PNG';
import mEight from '../../../assets/img/sneha.jpg';
import mNine from '../../../assets/img/Swathi.jpg';
import mTen from '../../../assets/img/chandra.jpg';
import mEleven from '../../../assets/img/rachana.jpg';
import mTwelve from '../../../assets/img/swayam.jpg';
import mThirteen from '../../../assets/img/abhitej.jpg';
import mFourteen from '../../../assets/img/Nagaraja.jpg';
import mFifteen from '../../../assets/img/Vishwas.jpg';
import mSixteen from '../../../assets/img/Anand.jpeg';
import mSeventeen from '../../../assets/img/Kartik.jpg';

import styles from './Mentor.module.css';

const Mentors = () => {
  return (
    <div
      className={styles.sectionMentors}
      style={{
        background: '#22B573',
      }}
      id="Mentors-section"
    >
      <Container className="mb-5">
        <p
          className={['section-bounties-header h1 ', styles.title].join(' ')}
          style={{ color: 'white' }}
        >
          Mentors
        </p>
        <div className={styles.under}></div>
      </Container>

      <div
        class={['js-flickity', styles.gallery].join(' ')}
        data-flickity-options='{ "freeScroll": true, "wrapAround": true }'
      >
        <Card
          className={['', styles.card]}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mOne})` }}
        >
          <div className={styles.cardContainer}>
            <a
              href="https://in.linkedin.com/in/kranirudha"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Kumar Anirudha</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mTwo})` }}
        >
          <div className={styles.cardContainer}>
            <a
              href="https://in.linkedin.com/in/manav-ailawadi-55138854"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <i className="fab fa-linkedin" style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Manav Ailawadi</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mThree})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://in.linkedin.com/in/betterclever"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Pranjal Paliwal</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mFour})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/nelson-vasanth-j-769827105/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Nelson Vasanth J</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mFive})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/intrepidkarthi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Karthikeyan NG</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mSix})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/creativehims/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Himanshu Gupta</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mTwelve})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/swayam-mittal-5b571768/n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Swayam Mittal</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mTen})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/chandra-sekhar-nayak-1aba6538/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Chandra Sekhar Nayak</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mEight})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/sneha-sulegay-99bb49122/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Sneha Sulegay</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mSeven})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/kalaivanan-sundaram-9253936a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Kalaivanan S</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mEleven})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/rachanavishwanathula/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Rachana V</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mThirteen})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/abhitejsingh23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Abhitej Singh </h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mNine})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="www.linkedin.com/in/swathi-pennapareddy-527346b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Swathi P</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mFourteen})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="#pablo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Dr. Nagaraja</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mFifteen})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://in.linkedin.com/in/vishwaslakkundi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Dr. Vishwas L</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mSixteen})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/anandjagadeesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Anand Jagadeesh</h5>
          </div>
        </Card>
        <Card
          className={styles.card}
          data-aos="fade-up"
          style={{ backgroundImage: `url(${mSeventeen})` }}
        >
          <div className={styles.cardContainer}>
            <a
              className={styles.cardLink}
              href="https://www.linkedin.com/in/kartikmuralidharan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin " style={{ fontSize: '30px' }}></i>
            </a>
            <h5 className={styles.cardTitle}>Kartik Muralidharan</h5>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Mentors;
