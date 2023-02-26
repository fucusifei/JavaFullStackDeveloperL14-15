import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Link from 'components/Link';
import Typography from 'components/Typography';
import useAccessValidate from 'hooks/useAccessValidate';
import * as PAGES from "../../../constants/pages";
import {Button} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteList} from "../../../app/actions/list";


const getClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Initial = ({
  authorities,
}) => {
  const classes = getClasses();
  const {
    availableItems,
  } = useSelector(({ reducer })=> reducer);
  const canSeeList = useAccessValidate({
    ownedAuthorities: authorities,
    neededAuthorities: ['МОЖНО_ВОТ_ЭТУ_ШТУКУ'],
  });

  return (
    <div className={classes.container}>
      <Button  variant="contained"
               color="secondary"
               href={`/${PAGES.VIEW_LIST}`}
      >DB dat</Button>
    </div>
  )
};

export default Initial;
