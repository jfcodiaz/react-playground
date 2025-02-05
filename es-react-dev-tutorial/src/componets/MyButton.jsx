export default (props) => {
  return (
    <button 
      onClick={props.onClick || (() => {}) }
    >
      { props.children || 'My Button' }
    </button>
  );
}
