import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

export default function Contact({ name, number, id, onDelete }) {
  return (
    <li className={s.listItem}>
      <div>
        <p className={s.infoItem}>
          <FaUser/>
          {name}
        </p>
        <p className={s.infoItem}>
          <FaPhone/>
          {number}
        </p>
      </div>
      <button className={s.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}