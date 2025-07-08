interface FavButtonProps {
  isFav: boolean;
  blockName: string;
  small?: boolean;
}

function FavButton({ small, blockName, isFav }: FavButtonProps) {
  return (
    <button
      className={`${blockName}__bookmark-button ${
        isFav && `${blockName}__bookmark-button--active`
      }  button`}
      type='button'
    >
      <svg
        className={`${blockName}__bookmark-icon`}
        width={small ? '18' : '31'}
        height={small ? '19' : '33'}
      >
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>{isFav ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavButton;
