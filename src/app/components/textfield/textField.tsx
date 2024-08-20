import MUITextField from '@mui/material/TextField';

export default function TextField() {
  return (
    <>
      <MUITextField label="직접수정" multiline maxRows={4} variant="standard" />
    </>
  );
}
