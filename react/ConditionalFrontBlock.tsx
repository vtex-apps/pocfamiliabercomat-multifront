import { FC } from "react";
import React from "react";

const ConditionalFrontBlock: FC<any> = ({
  frontValue,
  children
}) => {

  // obtenemos el código postal guardado en el local storage
  const storageCp = window?.localStorage?.getItem("CP") || "";
  const postalCode = parseInt(storageCp);

  console.log('postalCode', postalCode);

  // let conditionalFront = <></>;
  let id = 1; //aca valor default
  let condition = frontValue == id;
  let conditionalFront = <>{condition && children}</>;

  if (postalCode > 3500 && postalCode < 3790) {

    id = 2;
    let condition = frontValue == id;
    return conditionalFront = <>{condition && children}</>;

  } else if (postalCode > 4000 && postalCode < 4242) {

    id = 3;
    let condition = frontValue == id;
    return conditionalFront = <>{condition && children}</>;

  } else {

    return conditionalFront;

  }
};

export default ConditionalFrontBlock;

