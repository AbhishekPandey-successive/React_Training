import useClipBoard from "./useClipBoard";

const ClipBoard = ({ text }) => {
  const [input, setInput,copyText, resetInput] = useClipBoard("");

  return (
    <>
      <input placeholder="enter text" value={input} onChange={(e) => setInput(e.target.value)}/>

      <button
        onClick={() => {
          copyText();
          resetInput();
        }}
      >
        Copy text
      </button>
    </>
  );
};
export default ClipBoard;

