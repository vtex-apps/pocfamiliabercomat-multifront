import { FC } from "react";
import React from "react";

type Props = {
  frontValue: number;
};

const GetPostalCode = async() => {

  fetch('/api/sessions?items=public.postalCode', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  })
  .then(response => response.json())
  .then(response => {

    let postalCode = response.namespaces.public.postalCode.value;
    localStorage.setItem("CP", postalCode);

  })
  .catch(err => console.error(err));
}

const ConditionalFrontBlock: FC<Props> = ({
  frontValue,
  children
}) => {
  GetPostalCode();

  // obtenemos el código postal guardado en el local storage
  const localStorage = window?.localStorage?.getItem("CP") || "";
  const postalCode = parseInt(localStorage);
  console.log('postalCode', postalCode);

  let conditionalFront = <></>;

  if (postalCode < 2000) {

    const id1 = 1;
    let condition = frontValue == id1;
    return conditionalFront = <>{condition && children}</>;

  } else if (postalCode > 2000 && postalCode < 5000) {

    const id2 = 2;
    let condition = frontValue == id2;
    return conditionalFront = <>{condition && children}</>;

  } else if (postalCode > 5000) {

    const id3 = 3;
    let condition = frontValue == id3;
    return conditionalFront = <>{condition && children}</>;

  } else {

    return conditionalFront;

  }
};

export default ConditionalFrontBlock;

