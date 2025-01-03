import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';


export default function ReportList({ filter }) {
  console.log(filter);
  return (
    <div>
      {
        filter?.groupedByDate?.map((item, key) => {

          return (<>
            <Accordion key={key} sx={{
              backgroundColor: '#2e74a8',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              color: 'white',
              marginBottom: '5px'
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography component="span" sx={{ fontWeight: 'bolder', fontSize: 18 }}>Total Expense Of {item?.date}</Typography>
                <Typography component="span" sx={{ marginLeft: 'auto', fontWeight: 'bolder', fontSize: 18 }}>{item?.total} Tk</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table sx={{ minWidth: 250, color: 'white' }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow >
                        <TableCell sx={{ fontWeight: '900', color: 'white' }}>Category</TableCell>
                        <TableCell align="right" sx={{ fontWeight: '900', color: 'white' }}>Item Name</TableCell>
                        <TableCell align="right" sx={{ fontWeight: '900', color: 'white' }}>Cost</TableCell>
                        <TableCell align="center" sx={{ fontWeight: '900', color: 'white' }} colSpan={2}>Update</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {item?.expenses?.map((it, key) => {
                        return (<>
                          <TableRow key={key}>
                            <TableCell sx={{ color: 'white' }}>
                              {it?.category}
                            </TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{it?.title}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{it?.amount}</TableCell>
                            <TableCell align="center" colSpan={2} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                              <Button variant='text' sx={{ color: '#ffffff', fontWeight: 'bolder' }}>Edit</Button>
                              <Button variant='text' sx={{ color: '#fe0032', fontWeight: 'bolder' }}>Delete</Button>
                            </TableCell>
                          </TableRow>
                        </>)
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </>)
        })}

    </div>
  );
}

ReportList.propTypes = {
  filter: PropTypes.object
}
