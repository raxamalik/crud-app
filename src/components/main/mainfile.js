import React from 'react'

export const InlineEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = React.useState(value);

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export const MultilineEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = React.useState(value);

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
  };

  const onInput = (target) => {
    if (target.scrollHeight > 33) {
      target.style.height = "5px";
      target.style.height = target.scrollHeight - 16 + "px";
    }
  };

  const textareaRef = React.useRef();

  React.useEffect(() => {
    onInput(textareaRef.current);
  }, [onInput, textareaRef]);

  return (
    <textarea
      rows={1}
      aria-label="Field name"
      value={editingValue}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onInput={(event) => onInput(event.target)}
      ref={textareaRef}
    />
  );
};

const App = () => {
  const [value, setValue] = React.useState("This is inline editable");
  const [multilineValue, setMultilineValue] = React.useState(
    "This is the multi-line version!"
  );

  return (
    <div id="container">
      <InlineEdit value={value} setValue={setValue} />
      <MultilineEdit value={multilineValue} setValue={setMultilineValue} />
    </div>
  );
};

