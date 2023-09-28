export default function StyledButton({text, event, children}) {
  return(
    <div className='btn' onClick={event}>
      <img src='./startMenu/rockLikeButton.svg' alt='button' />
      <p className='text'>{text}</p>
      {children}
    </div>
  )
}
