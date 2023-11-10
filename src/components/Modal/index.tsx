import React from 'react'
import { useActions } from '../../hooks/actions';

interface IModalProps {
      isSuccessEndGame: boolean | null,
      setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = (props: IModalProps) => {
      const { isSuccessEndGame, setIsShowModal } = props;
      const { resetStore } = useActions();

      const modalHandler = () =>{
            resetStore();
            setIsShowModal(false);
      }
      return (
            <div>
                  <h3>Modal</h3>
                  <p>{isSuccessEndGame ? 'Ура!!! поздравляем!!!' : 'К сожалению вы проиграли('}</p>
                  <button onClick={modalHandler}>Start New Game</button>
            </div>
      )
}

export default Modal