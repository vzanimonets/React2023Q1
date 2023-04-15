// import { BaseSyntheticEvent } from 'react';
//
// const validateFile = (files: FileList) => {
//   if (!files[0].type.startsWith('image/')) {
//     resetField('image');
//     return 'Wrong type of the file';
//   }
//   clearErrors('image');
// };
//
// const changeFile = ({ target }: BaseSyntheticEvent) => {
//   const { files } = target;
//   setFileName(files[0].name);
// };
//
// const validateDate = (value: string) => {
//   if (new Date(value).getTime() <= new Date().getTime()) {
//     return 'Published date can not be later than today';
//   }
// };
