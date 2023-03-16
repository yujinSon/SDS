import React, {useState} from 'react';
import 영입 from 'assets/img/영입.png';
import 휴식 from 'assets/img/휴식.png';
import 유물 from 'assets/img/유물.png';
import 상점 from 'assets/img/상 점.png';
import 영입버튼 from 'assets/img/영입버튼.png';
import 휴식버튼 from 'assets/img/휴식버튼.png';
import 유물버튼 from 'assets/img/유물버튼.png';
import background from 'assets/img/모닥불 배경.png';
import Modal from 'components/common/Modal';
import Recruit from 'pages/game/Recruit';
import Rest from 'pages/game/Rest';
import Relics from 'pages/game/Relics';
import "./ShopPage.css";

export default function ShopPage() {

  const [userInfo, setUserInfo] = useState(true);

  const [recruitModal, setRecruitModal] = useState(false);
  const [restModal, setRestModal] = useState(false);
  const [relicsModal, setRelicsModal] = useState(false);

  const onClickRecruitModal = () => {
    setRecruitModal(!recruitModal);
  };
  const onClickRestModal = () => {
    setRestModal(!restModal);
  };
  const onClickRelicsModal = () => {
    setRelicsModal(!relicsModal);
  };
  const handleSuccess = (response) => {
    setUserInfo(response.profile);
  };

  const handleFailure = (error) => {
    console.error(error);
  };

  return (
      <div className="container">
        <img src={상점} />
        <div className="card">
          <div className="card-item">
            <img src={영입} />
            <button onClick={onClickRecruitModal}>
              <img src={영입버튼} />
            </button>
          </div>
          <div className="card-item">
            <img src={휴식} />
            <button onClick={onClickRestModal}>
              <img src={휴식버튼} />
            </button>
          </div>
          <div className="card-item">
            <img src={유물} />
            <button onClick={onClickRelicsModal}>
              <img src={유물버튼} />
            </button>
          </div>
          {recruitModal ? (
              <Modal
                  close={() => setRecruitModal(false)}
                  content={<Recruit />}
              ></Modal>
          ) : null}

          {restModal ? (
              <Modal
                  close={() => setRestModal(false)}
                  content={<Rest />}
              ></Modal>
          ) : null}
          {relicsModal ? (
              <Modal
                  close={() => setRelicsModal(false)}
                  content={<Relics />}
              ></Modal>
          ) : null}
        </div>
      </div>
  );
}
