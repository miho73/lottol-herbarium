interface ImageOptionProps {
  path: string;
}

function ImageOption(props: ImageOptionProps) {
  return (
    <img
      src={props.path}
      className={'w-full aspect-square'}
    />
  )
}

export {
  ImageOption
}
