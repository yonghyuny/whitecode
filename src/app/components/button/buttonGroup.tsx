import Button from './button';

export default function ButtonGroup() {
  const handleClick = () => {
    console.log('클릭');
  };

  return (
    <>
      <Button onClick={handleClick} text={'등록'} />
      <Button onClick={handleClick} text={'취소'} />
    </>
  );
}
