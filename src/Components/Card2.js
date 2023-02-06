import React from "react";
import './Card2.css'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
import image5 from './Images/image5.png'
import image6 from './Images/image6.png'

import { Card, CardImg, CardText, CardBody,Col,CardTitle,CardHeader,Row, } from 'reactstrap';

const Card2 = () => {
return(
    <>
    <section className="body">
        <div className="t10">BETA LAUNCH CARD DETAILS</div>
        <div className="t11">X+ Only</div>
        {/* ___________________________________________________________________________ */}
        <div style={{display: "flex", flexWrap: "wrap" , width:"65%" , height:"auto" , margin:"10px 0 0 170px", }} className="Card2">
      <div style={{width: "30%"}} className="imgdiv">
        <img src={image3} alt="Image" style={{width: "115%" , height:"auto" , margin:"20px 0px 20px 20px"}} className="bg3" />
      </div>
      <div style={{width: "40%", textAlign: "left" , color:"black" ,  margin: "10px 0 0 190px"}} className="t12">
        <p className="t13">BLACK Platinum Card (X+ ONLY)</p>
        <p className="t14">$550 USDC</p>
        <p className="t15">Monthly Top-up Limit: $150,000 USD</p>
      </div>
    </div>
    <p className="t16">For DeGods Holder</p>
    {/* ___________________________________________________________________________ */}
    <div style={{ display: 'flex',  width:"1200px"}} className="Card5">
    <div style={{ width: '400px', height: '470px' }} className="Card3">
      <img src={image4} alt="Card image cap" style={{margin:'30px 0 0 45px' , width:'75%',height:'45%'}} className="img4" /><br /><br />
        <CardText className="t19">Black Plastic Card (DEGODS)</CardText>
        <CardText className="t20">$250 USDC</CardText>
        <CardText className="t21">Monthly Top-up Limit: $30,000 USD</CardText>
    </div>
    <div style={{ width: '400px', height: '470px' }} className="Card4">
      <CardImg top src={image6} alt="Card image cap" style={{margin:'30px 0 0 45px' , width:'75%',height:'45%'}} className="img4"/>
        <CardText className="t22">Platinum Card (DEGODS)</CardText>
        <CardText className="t23">$550 USDC</CardText>
        <CardText className="t24">Monthly Top-up Limit: $120,000 USD</CardText>
    </div>
  </div>
  {/* ___________________________________________________________________________ */}
  <div style={{ width: '66%' }} className="Card6">
      <div className="t25">Card Requirements</div>
      <Row className="Card7">
        <Col xs="3" style={{background:'rgb(93, 22, 123)'}}>
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="l6">
<path d="M5.49633 15.3309C6.08542 18.0765 11.8809 18.5074 11.8809 18.5074C11.8809 18.5074 7.3072 8.86451 17.5983 8.61145C17.5955 8.61039 17.5927 8.60934 17.5899 8.60828C16.2053 8.33264 14.506 8.25519 12.1556 8.82678C7.17557 10.0378 5.64105 13.6616 5.49633 15.3309Z" fill="white"/>
<path d="M10.383 7.34335L28.9254 0.404449C28.952 6.77566 26.0659 8.93394 23.38 9.56452C20.04 10.3486 18.382 7.30993 12.157 8.82375C7.17706 10.0348 5.64255 13.6586 5.49782 15.3279C5.28339 14.2786 5.22024 12.8261 5.93536 11.1252C6.92325 8.77561 8.93276 7.96204 10.383 7.34335Z" fill="white"/>
<path d="M23.7477 14.6605C23.6252 16.0722 22.509 18.8938 19.1561 20.4636C25.095 12.9084 11.9651 8.54257 12.8232 18.3122C8.43557 7.11079 22.7933 7.36779 23.7477 14.6605Z" fill="white"/>
<path d="M18.8671 22.6566L0.324707 29.5955C0.298087 23.2243 3.18417 21.066 5.8701 20.4355C9.21002 19.6513 10.8681 22.6901 17.093 21.1762C22.073 19.9652 23.6074 16.3238 23.7522 14.6546C23.9677 15.9664 24.2034 16.8231 23.4883 18.524C22.5004 20.8736 20.3173 22.0379 18.8671 22.6566Z" fill="white"/>
</svg>
<svg width="127" height="16" viewBox="0 0 127 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="l7">
<path d="M16.9846 11.325C16.8392 11.8706 16.6344 12.3633 16.3703 12.8031C16.1154 13.2359 15.826 13.6193 15.5019 13.9532C15.1779 14.2872 14.8266 14.5717 14.448 14.8069C14.0695 15.042 13.6913 15.2346 13.3134 15.3848C12.9354 15.535 12.5605 15.6463 12.1887 15.7186C11.8242 15.7909 11.4875 15.8277 11.1786 15.829L0.114549 15.8752L0.850811 13.1121L11.9149 13.0659C12.4664 13.0636 12.9345 12.906 13.3191 12.593C13.711 12.28 13.9768 11.8613 14.1165 11.337C14.1845 11.082 14.2063 10.8483 14.1821 10.6361C14.1578 10.4239 14.0892 10.2402 13.9763 10.085C13.8708 9.92975 13.719 9.81007 13.5211 9.72598C13.3304 9.64185 13.1028 9.60034 12.838 9.60145L6.24151 9.62901C5.77821 9.63094 5.2989 9.5551 4.8036 9.40148C4.31018 9.24077 3.87901 8.98426 3.51011 8.63196C3.14855 8.27962 2.8898 7.81717 2.73385 7.24459C2.58525 6.67198 2.62139 5.97121 2.84227 5.14229C3.06315 4.31337 3.39986 3.61489 3.8524 3.04684C4.31418 2.47168 4.82024 2.00603 5.37058 1.64989C5.93016 1.28663 6.49914 1.02594 7.07751 0.867832C7.65777 0.702638 8.17955 0.619074 8.64285 0.617138L18.4053 0.576349L17.669 3.33942L7.90659 3.38021C7.3624 3.38248 6.89339 3.54368 6.49957 3.86378C6.1131 4.18386 5.85002 4.60603 5.71032 5.13031C5.56873 5.66167 5.60716 6.08259 5.82561 6.39306C6.0533 6.69641 6.43924 6.84695 6.98343 6.84468L13.602 6.81703C13.909 6.82282 14.2249 6.86396 14.5498 6.94045C14.8765 7.00986 15.1883 7.12178 15.485 7.27624C15.7892 7.43066 16.0635 7.62766 16.3082 7.86726C16.5548 8.09977 16.7514 8.38202 16.898 8.71402C17.0519 9.046 17.1412 9.42778 17.1658 9.85937C17.1903 10.291 17.1299 10.7795 16.9846 11.325Z" fill="white"/>
<path d="M35.2867 9.57135C35.0394 10.4995 34.6464 11.3539 34.1078 12.1346C33.5692 12.9153 32.9303 13.5903 32.1909 14.1595C31.4516 14.7287 30.635 15.1745 29.7411 15.4967C28.8564 15.8117 27.9398 15.9713 26.9911 15.9752L23.1082 15.9915C22.1595 15.9954 21.3223 15.8432 20.5964 15.5349C19.8724 15.2194 19.2918 14.7796 18.8545 14.2152C18.4172 13.6509 18.1333 12.9798 18.0026 12.2019C17.8794 11.4239 17.9414 10.5709 18.1887 9.64278L18.9646 6.73093C19.21 5.8099 19.602 4.95904 20.1406 4.17833C20.6885 3.3905 21.3311 2.71551 22.0686 2.15335C22.8079 1.58411 23.6245 1.13839 24.5184 0.816192C25.4123 0.493996 26.3336 0.330916 27.2822 0.326953L31.1651 0.310729C32.1138 0.306766 32.9465 0.462518 33.6631 0.777985C34.3871 1.09342 34.9677 1.5333 35.405 2.09763C35.8442 2.65487 36.1245 3.32601 36.2458 4.11104C36.3691 4.88898 36.308 5.73847 36.0626 6.65949L35.2867 9.57135ZM33.1945 6.67147C33.3399 6.12594 33.3792 5.63394 33.3124 5.19545C33.2548 4.74984 33.1021 4.37186 32.8543 4.06151C32.6156 3.74405 32.2873 3.50127 31.8693 3.33317C31.4606 3.15795 30.9804 3.0715 30.4289 3.0738L26.546 3.09003C25.9871 3.09236 25.4524 3.18306 24.9419 3.36211C24.4406 3.53405 23.9821 3.78012 23.5662 4.10032C23.1522 4.41344 22.7938 4.79355 22.491 5.24066C22.1975 5.68065 21.978 6.17342 21.8327 6.71895L21.0567 9.6308C20.9114 10.1763 20.8675 10.6719 20.925 11.1175C20.9918 11.556 21.1482 11.934 21.3942 12.2514C21.6421 12.5617 21.9704 12.8045 22.3791 12.9797C22.7971 13.1478 23.2856 13.2307 23.8445 13.2284L27.7053 13.2122C28.2642 13.2099 28.7943 13.1228 29.2955 12.9508C29.806 12.7718 30.2683 12.5257 30.6823 12.2126C31.0982 11.8924 31.4529 11.5123 31.7464 11.0723C32.0492 10.6252 32.2733 10.1289 32.4186 9.58333L33.1945 6.67147Z" fill="white"/>
<path d="M48.0726 15.6748L36.7947 15.722C36.5888 15.7228 36.407 15.6882 36.2494 15.6181C36.0918 15.548 35.9628 15.453 35.8626 15.3331C35.7715 15.2061 35.7119 15.0577 35.6837 14.888C35.6554 14.7183 35.6677 14.5342 35.7206 14.3358L39.4104 0.488587L42.2785 0.476604L38.954 12.9529L48.8089 12.9118L48.0726 15.6748Z" fill="white"/>
<path d="M64.6227 11.126C64.4773 11.6715 64.2726 12.1642 64.0085 12.6041C63.7536 13.0369 63.4641 13.4202 63.1401 13.7542C62.816 14.0882 62.4647 14.3727 62.0862 14.6078C61.7077 14.843 61.3295 15.0356 60.9515 15.1858C60.5736 15.336 60.1987 15.4473 59.8268 15.5196C59.4623 15.5919 59.1256 15.6287 58.8168 15.63L47.7527 15.6762L48.489 12.9131L59.553 12.8669C60.1046 12.8646 60.5726 12.7069 60.9572 12.3939C61.3491 12.0809 61.615 11.6623 61.7547 11.138C61.8226 10.8829 61.8445 10.6493 61.8202 10.4371C61.796 10.2249 61.7274 10.0412 61.6145 9.88596C61.5089 9.73071 61.3572 9.61104 61.1592 9.52694C60.9686 9.44281 60.7409 9.4013 60.4762 9.40241L53.8797 9.42997C53.4164 9.43191 52.9371 9.35606 52.4418 9.20244C51.9483 9.04173 51.5172 8.78523 51.1483 8.43292C50.7867 8.08059 50.528 7.61813 50.372 7.04555C50.2234 6.47294 50.2596 5.77218 50.4804 4.94325C50.7013 4.11433 51.038 3.41585 51.4906 2.8478C51.9523 2.27265 52.4584 1.80699 53.0087 1.45085C53.5683 1.08759 54.1373 0.826902 54.7157 0.668793C55.2959 0.5036 55.8177 0.420035 56.281 0.4181L68.8082 0.365759L68.0719 3.12883L55.5447 3.18117C55.0006 3.18345 54.5315 3.34464 54.1377 3.66474C53.7513 3.98482 53.4882 4.407 53.3485 4.93127C53.2069 5.46263 53.2453 5.88355 53.4638 6.19402C53.6915 6.49737 54.0774 6.64792 54.6216 6.64564L61.2402 6.61799C61.5471 6.62378 61.8631 6.66492 62.1879 6.74141C62.5147 6.81082 62.8265 6.92275 63.1232 7.0772C63.4273 7.23162 63.7017 7.42863 63.9464 7.66822C64.1929 7.90073 64.3895 8.18298 64.5361 8.51498C64.6901 8.84696 64.7793 9.22874 64.8039 9.66033C64.8285 10.0919 64.7681 10.5805 64.6227 11.126Z" fill="white"/>
<path d="M88.7848 0.282294L82.3315 14.5763C82.1972 14.86 81.9997 15.1049 81.739 15.3113C81.4783 15.5176 81.1934 15.6497 80.8841 15.7076C80.5694 15.7585 80.2911 15.7278 80.0492 15.6155C79.8146 15.5033 79.6523 15.3271 79.562 15.0868L76.5257 6.79828L69.0495 15.1307C68.8697 15.3367 68.6544 15.4968 68.4036 15.6111C68.1601 15.7254 67.9134 15.783 67.6634 15.7841C67.3177 15.7855 67.0409 15.6805 66.8327 15.4691C66.6246 15.2576 66.5365 14.982 66.5683 14.6422L67.7047 0.37037L70.6168 0.358203L69.8325 10.4142L76.2072 3.44515C76.3869 3.23917 76.5985 3.07905 76.842 2.96481C77.0928 2.85053 77.3433 2.79287 77.5933 2.79182C77.8433 2.79078 78.0599 2.84649 78.2429 2.95895C78.426 3.07142 78.56 3.23009 78.645 3.43496L81.2937 10.3664L85.8727 0.294462L88.7848 0.282294Z" fill="white"/>
<path d="M88.9445 15.5041L86.0765 15.5161L90.1372 0.276644L93.0053 0.264661L88.9445 15.5041Z" fill="white"/>
<path d="M109.293 6.56583C109.125 7.19638 108.894 7.75996 108.6 8.25657C108.306 8.75318 107.969 9.19336 107.587 9.57711C107.215 9.95374 106.813 10.2774 106.381 10.5481C105.949 10.8189 105.512 11.0401 105.069 11.2118C104.634 11.3834 104.204 11.5091 103.779 11.5887C103.361 11.6683 102.975 11.7088 102.623 11.7103L97.5228 11.7316L98.2591 8.96855L103.359 8.94724C103.734 8.91736 104.084 8.84513 104.408 8.73055C104.742 8.60885 105.042 8.44836 105.308 8.2491C105.574 8.04983 105.803 7.8118 105.994 7.535C106.187 7.25112 106.331 6.93206 106.425 6.57781L106.759 5.3238C106.815 4.9768 106.823 4.65831 106.783 4.36832C106.742 4.07834 106.647 3.83105 106.495 3.62645C106.352 3.42182 106.151 3.26342 105.895 3.15127C105.64 3.03202 105.325 2.97318 104.95 2.97475L98.4861 3.00176C98.1037 3.00336 97.7877 3.10021 97.5382 3.29233C97.2886 3.48445 97.1157 3.76118 97.0195 4.1225L93.9923 15.483L91.1242 15.495L94.1514 4.13448C94.3402 3.426 94.633 2.82324 95.0299 2.3262C95.4342 1.82913 95.8754 1.42744 96.3537 1.12113C96.8394 0.814795 97.3355 0.593338 97.842 0.45676C98.3504 0.313097 98.8032 0.240437 99.2003 0.238777L105.686 0.211677C106.334 0.208973 106.893 0.288021 107.364 0.448821C107.837 0.602536 108.233 0.81319 108.551 1.08078C108.878 1.34126 109.132 1.64451 109.311 1.99053C109.498 2.33652 109.629 2.70043 109.704 3.08227C109.787 3.457 109.818 3.83903 109.795 4.22835C109.774 4.6106 109.718 4.97175 109.627 5.31182L109.293 6.56583Z" fill="white"/>
<path d="M122.927 9.14148L115.43 9.1728L116.172 6.38848L123.669 6.35715L122.927 9.14148ZM122.558 15.3636L112.211 15.4069C111.814 15.4085 111.398 15.343 110.963 15.2104C110.528 15.0777 110.149 14.8599 109.826 14.557C109.512 14.2469 109.284 13.848 109.142 13.3603C109.01 12.8655 109.039 12.2603 109.229 11.5447L111.886 1.57639C111.937 1.3851 112.021 1.20428 112.14 1.03394C112.259 0.8636 112.398 0.714404 112.557 0.586355C112.723 0.458276 112.904 0.358443 113.1 0.286858C113.295 0.215272 113.496 0.179049 113.702 0.178189L126.619 0.124219L125.883 2.88729L114.388 2.93532L112.097 11.5327C112.001 11.8941 112.027 12.1699 112.174 12.3604C112.322 12.5509 112.587 12.6453 112.969 12.6437L123.294 12.6006L122.558 15.3636Z" fill="white"/>
</svg>
<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="l8">
<path d="M9.51344 0.234504L6.12309 5.42233L9.52806 10.5955H7.08759L4.85171 7.01521L2.60122 10.5955H0.233817L3.63878 5.40771L0.248431 0.234504H2.67429L4.89555 3.81483L7.16066 0.234504H9.51344Z" fill="white"/>
</svg>
<svg width="96" height="23" viewBox="0 0 96 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="l9">
<path d="M41.9608 0.595535C43.0787 0.595535 44.1693 0.595535 45.2871 0.595535C45.6688 0.67516 46.0778 0.701701 46.4595 0.807868C47.7682 1.20599 49.077 1.63066 50.3857 2.08186C50.5765 2.13495 50.7947 2.45344 50.7674 2.61269C50.5765 3.64781 50.2221 4.65639 49.3224 5.37302C48.3135 6.16926 47.1684 6.46122 45.887 6.0631C44.9327 5.77114 44.3329 5.1076 43.6785 4.44406C42.8878 3.64781 42.0153 2.90465 41.1429 2.16149C40.6521 1.76336 40.0795 1.6572 39.4252 1.84299C38.2255 2.16149 37.8711 3.14352 37.6257 4.12556C37.2167 5.77114 37.6257 7.39017 37.9529 8.98267C38.1437 9.91162 38.6072 10.7875 38.9071 11.6899C39.4524 13.3089 40.2704 14.8218 41.1974 16.2551C42.1244 17.6618 43.2695 18.9623 44.3329 20.2894C44.6873 20.7406 45.2599 20.9529 45.6143 20.7671C46.1323 20.5282 46.2959 20.1036 46.2959 19.5462C46.2687 18.0599 46.2959 16.547 46.2959 15.0607C46.2959 14.6891 46.1869 14.4502 45.887 14.2114C45.478 13.9194 45.0963 13.6009 44.7418 13.2559C44.5782 13.0966 44.4964 12.8577 44.3329 12.6189C45.3962 12.38 50.8492 12.38 52.0488 12.5923C52.1034 12.9108 52.1852 13.2293 52.2397 13.5478C53.1394 9.91162 55.4842 7.7883 59.2468 7.54942C63.7728 7.25747 66.9083 9.195 67.9443 13.8132C68.0534 13.6274 68.1352 13.4947 68.1897 13.362C68.326 12.8312 68.4351 12.3004 68.5987 11.7961C69.144 10.1505 70.1801 8.8765 71.7887 8.1068C73.5609 7.23092 75.3604 7.28401 77.1326 8.15988C77.6234 8.39875 77.8688 8.26604 77.8688 7.73521C77.8688 6.80626 77.8415 5.8773 77.8688 4.97489C77.8961 4.4706 77.6234 4.31135 77.1599 4.31135C76.5055 4.28481 76.0693 3.93977 75.6876 3.46202C75.3059 2.98428 75.3877 2.40036 75.3604 1.84299C75.3331 1.39178 75.4967 1.28562 75.9602 1.28562C78.2505 1.31216 80.5408 1.31216 82.8037 1.28562C83.3218 1.28562 83.4854 1.41832 83.4854 1.92261C83.4581 8.34567 83.4581 14.7687 83.4854 21.2183C83.4854 22.1738 83.24 22.1738 84.4942 22.1473C84.5214 22.1473 84.5487 22.1207 84.576 22.0942C84.6032 21.7492 84.6305 21.4307 84.685 21.1122C84.7941 20.4752 84.8486 19.8382 85.0395 19.2277C85.1213 18.9357 85.3939 18.6173 85.6666 18.4315C86.0483 18.1926 86.3209 18.5111 86.5391 18.7765C86.7026 18.9357 86.8117 19.1481 86.9208 19.3604C87.3025 19.9178 87.6569 20.5282 88.1204 21.0591C88.5021 21.5103 88.7475 22.1473 89.5109 22.1473C89.8654 22.1473 90.2198 22.1207 90.5743 22.0677C91.3922 21.9349 92.1829 20.7406 92.0193 20.077C91.7739 19.0685 90.9832 18.5907 90.1653 18.166C88.9111 17.5025 87.6024 16.8921 86.5391 15.9631C85.5848 15.1138 84.9304 14.1052 84.9849 12.7781C84.9849 12.38 84.9577 11.9819 84.9849 11.5572C85.0395 10.7875 85.3667 10.0974 85.8574 9.5135C86.9753 8.18642 88.5294 7.68213 90.1926 7.57596C91.6921 7.49634 93.1917 7.54942 94.7185 7.57596C95.2366 7.57596 95.6728 8.13334 95.5638 8.63763C95.3456 9.46041 95.1003 10.2832 94.8549 11.0794C94.6913 11.5572 93.8188 11.7164 93.5189 11.3183C92.9191 10.5221 92.3738 9.67275 91.7739 8.8765C91.5831 8.61109 91.3922 8.2395 91.0923 8.1068C90.547 7.86792 89.5109 8.2395 89.1565 8.71725C88.6385 9.40733 88.7203 10.3363 89.3201 11.0264C90.029 11.8226 90.956 12.2738 91.883 12.7781C92.6737 13.2293 93.4916 13.6805 94.255 14.2114C95.1275 14.8218 95.591 15.7242 96 16.6532C96 17.3963 96 18.1395 96 18.8561C95.6728 19.4135 95.4274 20.077 94.9912 20.5548C93.7643 21.9084 92.1556 22.5454 90.3289 22.5719C88.3385 22.625 86.3482 22.5719 84.3579 22.5719C82.3402 22.5719 80.2954 22.5719 78.2778 22.5719C77.8961 22.5719 77.787 22.4392 77.8143 22.0942C77.8415 21.7226 77.8143 21.351 77.8143 20.9795C77.8415 20.661 77.7052 20.4752 77.378 20.5548C77.1872 20.6079 77.0236 20.714 76.86 20.8202C75.524 21.9349 74.0517 22.7577 72.1977 22.5454C71.3797 22.4392 70.6163 22.1473 69.9892 21.5634C69.5257 21.1387 69.144 20.661 68.8441 20.077C68.5169 19.4666 68.217 18.8827 68.1625 18.166C68.1352 17.7414 67.9443 17.3433 67.8353 16.9186C67.7807 16.9186 67.7262 16.8921 67.6989 16.8921C67.6172 17.0778 67.5081 17.2636 67.4536 17.476C67.399 17.6618 67.4808 17.9006 67.399 18.0599C66.9083 19.1215 66.3357 20.1036 65.3814 20.8467C64.3999 21.643 63.2548 22.1473 62.0278 22.3596C60.6646 22.5985 59.2741 22.6516 57.9108 22.3065C56.2477 21.8819 54.8299 21.0591 53.8211 19.7055C53.1667 18.8296 52.5396 17.9006 52.4851 16.7328C52.4851 16.5736 52.376 16.4408 52.2942 16.3081C52.1579 16.5736 52.0761 16.8124 52.0761 17.0778C52.0761 17.9272 52.0761 18.7765 52.0761 19.6524C52.0761 19.7851 52.0488 19.9974 51.9671 20.0505C51.04 20.6079 50.1403 21.2449 49.1588 21.6695C46.7867 22.6781 44.3056 22.7577 41.77 22.3331C40.2976 22.0942 38.8799 21.5899 37.6529 20.7671C35.3627 19.2012 33.8086 17.1044 33.2633 14.3971C33.236 14.3175 33.1542 14.2379 33.0724 14.1583C32.9906 14.2644 32.9088 14.3441 32.8543 14.3971C32.3908 14.928 32.0091 15.565 31.4638 15.9631C30.4277 16.6797 29.2826 17.2636 28.1647 17.9272C27.374 18.4049 26.6106 18.8561 26.2289 19.7585C25.9017 20.6079 26.2016 21.6164 27.1832 21.988C27.7285 22.1738 28.5192 22.0942 28.7918 21.6961C29.3644 20.8998 29.9097 20.1036 30.4277 19.2808C30.6458 18.9358 30.9185 18.6438 31.382 18.6438C31.8455 18.6438 32.1182 18.9092 32.2272 19.2542C32.4726 20.1036 32.6907 20.9794 32.7998 21.8288C32.8543 22.28 32.4453 22.5719 31.9 22.5719C30.4005 22.5719 28.9281 22.5719 27.4286 22.5719C27.0469 22.5719 26.6379 22.5189 26.2562 22.4127C24.8384 22.0677 23.666 21.4041 22.7935 20.2097C22.0846 19.2542 21.5393 18.2722 21.3757 17.1044C21.3212 16.7593 21.2122 16.4408 21.1304 16.1223C20.885 16.2816 20.7487 16.4408 20.6669 16.6001C20.5033 16.9982 20.4215 17.4494 20.1761 17.821C19.14 19.387 17.7768 20.5813 16.0318 21.3776C14.2323 22.1738 12.351 22.5719 10.3607 22.5719C7.36155 22.5719 4.3624 22.5719 1.39051 22.5719C0.299915 22.5719 0.299915 22.5719 0.299915 21.5368C0.299915 20.3955 0.817949 19.8382 1.88128 19.6789C2.39932 19.5993 2.48111 19.387 2.48111 18.9623C2.48111 14.6095 2.48111 10.2567 2.48111 5.93039C2.48111 5.26685 2.42658 5.21377 1.74496 5.16068C0.845214 5.1076 0.05453 4.23173 0 3.40894C0.10906 3.01082 0.136325 2.63924 0.10906 2.26765C0.0817949 1.84299 0.245385 1.68374 0.70889 1.68374C3.19 1.71028 5.69838 1.68374 8.17949 1.68374C10.1153 1.68374 12.0511 1.6572 13.9597 2.08186C15.7046 2.45344 17.3133 3.11698 18.6765 4.25827C20.5033 5.77114 21.3757 7.81484 21.7029 10.0709C21.7847 10.7079 21.812 11.3714 21.8665 12.1942C22.0301 11.9553 22.1392 11.8226 22.221 11.6899C22.3028 11.5041 22.33 11.3183 22.4118 11.1325C22.9299 10.2301 23.5842 9.43387 24.4567 8.82342C26.8015 7.1513 30.1823 7.07168 32.3635 9.59312C32.5271 9.77891 32.6362 9.9647 32.8543 10.2567C32.9088 9.9647 32.9634 9.80545 32.9906 9.64621C33.127 8.98267 33.2087 8.31913 33.3996 7.68213C33.754 6.48776 34.2993 5.34647 35.09 4.36444C36.2624 2.90465 37.7075 1.76336 39.5615 1.17945C40.3522 0.967117 41.1701 0.807868 41.9608 0.595535ZM8.72479 12.1411C8.72479 14.5564 8.72479 16.9717 8.72479 19.387C8.72479 20.1301 8.72479 20.8733 8.72479 21.5899C8.72479 21.8819 8.80659 22.1207 9.13377 22.1207C9.6518 22.0942 10.1971 22.0942 10.7151 21.9615C12.2965 21.5103 13.3053 20.3425 14.0142 19.0154C14.505 18.0599 14.8594 17.0248 15.0503 15.9631C15.2957 14.6626 15.4047 13.3355 15.4865 12.0349C15.5138 11.1856 15.3775 10.3363 15.2957 9.46042C15.2684 9.00921 15.2411 8.558 15.1321 8.13334C14.9139 7.28401 14.7231 6.43468 14.4232 5.63843C14.0687 4.70948 13.4962 3.91323 12.7327 3.22315C11.9148 2.50653 10.9605 2.21457 9.92445 2.1084C9.1883 2.02878 8.75206 2.02878 8.77932 3.09044C8.75206 6.11618 8.72479 9.11537 8.72479 12.1411ZM64.4544 20.077C64.4272 20.077 64.3999 20.077 64.3999 20.0505C64.3999 19.8116 64.4272 19.5727 64.3454 19.3604C63.8819 18.0599 63.4729 16.7328 62.8458 15.5119C62.0006 13.8929 61.019 12.3534 59.983 10.8406C59.4377 10.0443 58.6197 9.40733 57.8836 8.74379C57.5291 8.42529 57.0383 8.42529 56.5748 8.63763C56.0841 8.84996 55.975 9.24808 55.975 9.72583C55.975 10.4955 56.0295 11.2652 56.384 12.0084C56.8475 12.9904 57.1474 14.0256 57.6382 15.0076C58.1289 15.9631 58.756 16.839 59.3013 17.7679C60.0375 19.0419 60.9372 20.1832 62.0551 21.1122C62.7095 21.6695 63.8273 21.8288 64.209 21.0591C64.3454 20.7671 64.3726 20.4221 64.4544 20.077ZM77.896 14.3706C77.896 12.7516 77.896 11.106 77.896 9.48696C77.896 9.30117 77.8143 9.03575 77.6779 8.92958C76.9418 8.34567 75.4149 8.66417 74.9242 9.48696C74.2425 10.6017 73.9154 11.7961 73.9426 13.0966C73.9699 13.9459 73.9426 14.7687 73.9426 15.6181C73.9426 16.6532 74.1335 17.6883 74.6243 18.6173C75.1696 19.7055 76.1784 20.1832 77.4326 19.8382C77.787 19.732 77.9233 19.5727 77.896 19.2012C77.8688 17.5821 77.896 15.9896 77.896 14.3706ZM24.7021 10.7079C24.7566 11.8226 25.0838 12.7516 25.5473 13.6274C25.9835 14.4237 26.5016 15.1403 27.2922 15.6446C27.9739 16.0693 28.6555 15.9896 28.9827 15.4057C29.2008 15.0341 29.3917 14.5564 29.3371 14.1583C29.2281 13.2559 29.0099 12.3269 28.71 11.451C28.3556 10.3894 27.6194 9.56658 26.5288 9.16846C25.7654 8.8765 25.111 8.98267 24.8111 9.85854C24.7293 10.1505 24.7293 10.4955 24.7021 10.7079Z" fill="white"/>
</svg>
        </Col>
        <Col xs="9"  style={{background:'rgb(93, 22, 123)', width:'70%'}}>
          <Row>
            <Col xs="4"  style={{background:'rgb(93, 22, 123)'}}>
                <div  style={{background:'rgb(93, 22, 123)'}} className="t26">Black Plastic</div>
              <img src={image5} alt="card" style={{ width: '90%',height:'60%' ,margin:'40px 0 0 8px'  }} className="image8" />
            </Col>
            <Col xs="4"  style={{background:'rgb(93, 22, 123)'}}>
                <div style={{background:'rgb(93, 22, 123)'}} className="t26">Platinum</div>
              <img src={image6} alt="card" style={{ width: '90%',height:'60%' ,margin:'40px 0 0 8px'  }} className="image8" />
            </Col>
            <Col xs="4"  style={{background:'rgb(93, 22, 123)'}}>
                <div style={{background:'rgb(93, 22, 123)'}} className="t26">Black Platinum</div>
              <img src={image3} alt="card" style={{ width: '90%',height:'60%' ,margin:'40px 0 0 8px' }} className="image8" />
            </Col>
          </Row>
        </Col>
      </Row><br />  
    
  </div>
<br/>
{/* ____________________________________________________________________________________ */}
<div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Card Application (USD)</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">$250</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">$550</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">$550</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">SolSwipe NFT Requirement</p>
      <p style={{ width: '21%',background:'rgb(50, 5, 69)' }} className="t28">0</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">1</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">1</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '21%',background:'rgb(50, 5, 69)' }} className="t27">Card Replacement Fee (USD)</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">Text 2</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">Text 3</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">Text 4</p>
    </div><hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Card Loading Fee (%)</p>
      <p style={{ width: '22%',background:'rgb(50, 5, 69)' }} className="t28">2.25% (-0.5% for Solswipe NFT holders)</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">2.25% (-0.5% for Solswipe NFT holders) </p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">2.25% (-0.5% for Solswipe NFT holders)</p>
    </div><hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">SolSwipe NFT Requirement</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">N/A</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">N/A</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">N/A</p>
    </div>    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Loading Cap</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">$30,000 / Month</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">$75,000 / Month</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">N/A</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Minimum First Load</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">0 / Month</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">0 / Month</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">0 / Month</p>
    </div>    <hr className="hr1" />
    {/* ___________________________________________________________________________ */}
    <div style={{ display: 'flex',padding:'25px',background:'rgb(50, 5, 69)' , height:'90px',width:'38%',justifyContent: 'space-between',margin:'0 0 0 28%'  }} className="Card9">
      <span><button style={{ width: '13%' }} className="btn3">APPLY FOR THIS CARD</button></span><span>
      <button style={{ width: '13%' }} className="btn4">APPLY FOR THIS CARD</button></span><span>
      <button style={{ width: '13%' }} className="btn5">APPLY FOR THIS CARD</button></span>
    </div><hr className="hr2" />
    <div style={{height:'60px',width:'66%',margin:'0 0 0 13%',background:'rgb(93, 22, 123)'}} className="Card10">
    <p className="t29">Note:</p>
    <p className="t30">Card issuance fees include the physical card, fright charges, and the opening of offshore bank account. (No bank book).</p>
    </div><br /><br/><br /><br/><br/><br/><br/>
   
    </section>
    <svg width="1640" height="2" viewBox="0 30 1440 122" fill="none" xmlns="http://www.w3.org/2000/svg"className="ll2">
<path d="M-1.34799 85.6235C-5.4621 81.8541 -13.5929 81.0151 -17.144 81.0667L-18.007 21.7267L1456.22 0.286453L1457.1 60.5836C1448.94 57.9899 1431.62 53.2957 1427.59 55.2689C1422.55 57.7354 1408.36 58.8991 1403.24 55.6231C1398.12 52.347 1378.35 53.5918 1374.83 56.0362C1372.02 57.9917 1367.6 59.1728 1365.75 59.5189C1365.72 57.6047 1365 54.9027 1364.65 53.791C1364.28 56.4768 1358.15 60.4271 1355.13 62.0665C1350.21 61.3403 1337.32 58.5921 1325.06 53.4094C1309.75 46.9311 1255.71 64.4697 1246.53 61.2527C1239.19 58.679 1237.99 55.7926 1238.32 54.671C1224.47 56.1488 1195.76 59.3106 1191.71 60.1353C1187.67 60.96 1187.11 69.4561 1187.34 73.6011C1185.29 72.0354 1179.65 68.0649 1173.51 64.7078C1165.84 60.5116 1149.67 65.0546 1145.69 70.8562C1141.72 76.6578 1135.19 81.0607 1133.06 74.3905C1131.36 69.0544 1125.86 67.7941 1123.32 67.831C1115.57 69.3798 1097.72 72.9898 1088.42 75.0398C1076.78 77.6022 1078.93 85.2295 1069.2 79.1485C1061.41 74.2838 1041.53 72.6902 1032.57 72.5015C1029.39 74.7814 1021.31 80.0364 1014.45 82.8166C1006.04 86.2229 1002.45 84.9609 993.661 81.8801L993.121 81.6908C985.777 79.1172 976.913 83.6816 973.399 86.2855C972.674 82.9455 969.79 75.3291 964.052 71.5833C956.88 66.9011 947.422 79.4836 940.8 77.6653C935.501 76.2107 933.088 70.7572 932.543 68.2123C929.02 70.1782 909.763 71.8942 903.669 71.5042C898.793 71.1922 896.986 77.1856 896.692 80.2213C892.768 77.8852 882.594 73.821 873.293 76.2538C861.667 79.2948 856.657 83.6755 848.435 76.6153C841.858 70.9671 830.068 69.7027 824.995 69.7765C818.613 72.9007 803.078 76.9878 791.992 68.3418C778.135 57.5344 749.823 64.6473 749.844 66.0829C749.861 67.2314 737.834 77.5856 731.818 82.6192C733.131 79.8877 735.647 73.7563 735.202 71.0823C734.646 67.7399 730.595 68.2775 723.534 71.252C717.886 73.6317 718.225 78.3495 719.101 80.4109C717.579 80.433 714.022 80.1018 711.971 78.6C709.406 76.7227 697.287 80.7281 691.248 84.1665C685.209 87.6049 681.574 81.9139 670.399 81.1191C661.46 80.4833 656.603 86.1063 655.292 88.9973C646.109 85.6207 625.103 78.7145 614.54 78.1023C601.336 77.3371 582.254 91.0168 578.64 86.7615C575.026 82.5062 565.846 79.2892 555.756 83.2651C545.665 87.2411 545.144 86.2913 538.987 81.5944C534.061 77.8368 528.771 76.9565 526.742 76.986L521.273 84.7239C518.229 84.7682 511.437 85.2499 508.618 86.8225C505.095 88.7884 506.221 96.4304 501.669 97.4539C497.117 98.4774 484.872 93.869 476.748 93.5085C470.249 93.2201 465.998 98.6109 464.684 101.342C461.451 99.9534 452.934 95.8652 444.739 90.6235C436.545 85.3818 423.354 85.5098 417.783 86.229C412.284 91.8932 399.139 102.2 390.555 98.1126C381.971 94.0253 368.716 96.6751 363.161 98.511C357.963 101.618 344.927 107.775 334.37 107.545C323.812 107.316 322.41 122.557 323.029 130.207C322.658 127.979 319.984 123.167 312.25 121.748C302.584 119.974 293.626 132.07 271.333 134.309C249.262 136.526 230.128 135.416 223.341 135.022L223.139 135.01C217.857 134.704 212.205 139.158 210.039 141.423C207.285 138.113 201.363 131.019 199.712 129.128C197.648 126.765 188.552 129.291 178.406 129.438C168.259 129.586 166.612 120.994 160.948 115.333C156.417 110.804 146.121 107.571 141.539 106.521C138.502 107.043 130.383 107.066 122.205 102.973C114.027 98.8794 112.631 95.9321 112.956 94.9701C110.287 97.5617 102.797 101.245 94.1853 95.2431C83.4205 87.7412 71.3009 91.7467 66.7352 91.8131C62.1694 91.8795 61.7317 96.6723 54.0526 91.9975C46.3734 87.3227 40.8418 90.7537 35.1779 85.0923C32.9516 82.8669 32.0379 81.6086 31.8052 80.9403C28.4923 83.4249 22.2074 87.0476 18.4369 85.3358C13.329 83.0168 3.79465 90.3352 -1.34799 85.6235Z" fill=" rgb(50, 5, 69)"/>
</svg><br /><br/><br /><br /><br/><br/>
<h1 className='t32'>hiii</h1>
    </>
)
}
export default Card2