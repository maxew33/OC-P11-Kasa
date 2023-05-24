import styles from "./dropdown.module.css";

type DropdownProps = {
  title: string;
  size: string;
  content: string[];
};

export default function Dropdown(props: DropdownProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.size}</h3>
      <div>
        {props.content.map((item) => {
          return <div className="item">{item}</div>;
        })}
      </div>
    </div>
  );
}
