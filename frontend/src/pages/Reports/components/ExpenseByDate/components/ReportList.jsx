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

const categories = [
  'Food and Drinks', 'Shopping', 'Housing', 'Transportation', 'Vehicle', 'Entertainment', 'Electronics', 'Financial Expenses', 'Investments'
];
export default function ReportList({ filter, handleEdit, setForm, form, handleDelete}) {
  const [activeRow, setActiveRow] = React.useState(null);

  return (
    <div>
      {filter?.groupedByDate?.map((item, key) => (
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
                  <TableRow>
                    <TableCell sx={{ fontWeight: '900', color: 'white' }}>Category</TableCell>
                    <TableCell align="center" sx={{ fontWeight: '900', color: 'white' }}>Item Name</TableCell>
                    <TableCell align="center" sx={{ fontWeight: '900', color: 'white' }}>Cost (Tk.)</TableCell>
                    <TableCell align="center" sx={{ fontWeight: '900', color: 'white' }} colSpan={2}>Update</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item?.expenses?.map((it, index) => {
                    const isActive = activeRow === `${key}-${index}`;

                    const handleEditClick = () => {
                      setActiveRow(`${key}-${index}`);
                      setForm({
                        category: it?.category,
                        title: it?.title,
                        amount: it?.amount
                      });
                    };

                    return (
                      <TableRow key={index}>
                        <TableCell sx={{ color: 'white' }}>
                          <select
                            value={isActive ? form.category : it?.category}
                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                            style={{
                              border: !isActive && 'none',
                              color: !isActive && 'white',
                              maxWidth: '6vw',
                              background: !isActive && 'transparent',
                              WebkitAppearance: !isActive && 'none'
                            }}
                            disabled={!isActive}
                          >
                            <option value={it?.category}>{it?.category}</option>
                            {categories.map((cat, idx) => (
                              cat !== it?.category && <option key={idx} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </TableCell>
                        <TableCell align="center" sx={{ color: 'white' }}>
                          <input
                            value={isActive ? form.title : it?.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            style={{
                              border: !isActive && 'none',
                              background: !isActive && 'transparent',
                              color: !isActive && 'white',
                              maxWidth: '6vw',
                              textAlign: 'center'
                            }}
                            disabled={!isActive}
                          />
                        </TableCell>
                        <TableCell align="center" sx={{ color: 'white' }}>
                          <input
                            value={isActive ? form.amount : it?.amount}
                            onChange={(e) => setForm({ ...form, amount: parseFloat(e.target.value) })}
                            style={{
                              border: !isActive && 'none',
                              background: !isActive && 'transparent',
                              color: !isActive && 'white',
                              maxWidth: '6vw',
                              textAlign: 'center'
                            }}
                            disabled={!isActive}
                          />
                        </TableCell>
                        <TableCell align="center" colSpan={2} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                          {!isActive ? (
                            <>
                              <Button
                                variant='text'
                                sx={{ color: '#ffffff', fontWeight: 'bolder' }}
                                onClick={handleEditClick}
                              >
                                Edit
                              </Button>
                              <Button
                                variant='text'
                                sx={{ color: '#fe0032', fontWeight: 'bolder' }}
                                onClick={()=>handleDelete(it?._id)}
                              >
                                Delete
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                variant='text'
                                sx={{ color: '#ffffff', fontWeight: 'bolder' }}
                                onClick={() => {handleEdit(it?._id), setActiveRow(null)}}
                              >
                                Save
                              </Button>
                              <Button
                                variant='text'
                                sx={{ color: '#fe0032', fontWeight: 'bolder' }}
                                onClick={() => setActiveRow(null)}
                              >
                                Cancel
                              </Button>
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

ReportList.propTypes = {
  filter: PropTypes.object,
  handleEdit: PropTypes.func,
  setForm: PropTypes.func,
  form: PropTypes.object,
  handleDelete: PropTypes.func
};
