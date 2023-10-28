import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GiBrain, GiCircuitry, GiHealthNormal } from 'react-icons/gi';
import { MdGavel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { LevelBoxType } from '../../interfaces';

function LevelBox({ type }: { type: LevelBoxType }): React.ReactElement {

  const getIcon = () => {
    if (type === LevelBoxType.engineering) {
      return <GiCircuitry />
    } else if (type === LevelBoxType.laws) {
      return <MdGavel />
    } else if (type === LevelBoxType.socials) {
      return <GiBrain />
    } else if (type === LevelBoxType.medicine) {
      return <GiHealthNormal />
    }
  }


  return (
    <Link to={type.toLowerCase()} className={'levelbox ' + type}>
      {getIcon()}
      <h2>{type}</h2>
      <AiOutlinePlusCircle />
    </Link>
  )
}

export default LevelBox