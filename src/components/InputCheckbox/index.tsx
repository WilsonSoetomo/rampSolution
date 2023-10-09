import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const inputIdRef = useRef(`RampInputCheckbox-${id}`);
  const inputId = inputIdRef.current;

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
      htmlFor ={inputId}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange= {(event) => onChange(event.target.checked)}
      />
    </div>
  )
}