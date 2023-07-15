import Select, { StylesConfig } from 'react-select';

const Selects = ({selectData}) => {

  const patterns = [
    {
      options:[
        {value:'1', label:'1'},
        {value:'2', label:'2'},
        {value:'3', label:'3'}
      ],
      placeholder:"Откуда..",
      key:"from"
    },
    {
      options:[
        {value:'1', label:'1'},
        {value:'2', label:'2'},
        {value:'3', label:'3'}
      ],
      placeholder:"Куда..",
      key:"to"
    },
    {
      options:[
        {value:'1', label:'1'},
        {value:'2', label:'2'},
        {value:'3', label:'3'}
      ],
      placeholder:"Когда..",
      key:"when"
    },
  ]

  return (
      <>  
      {patterns.map(
          (pattern) => {
            return (<Select
            defaultValue={selectData[pattern.key]}
            options={pattern.options}
            placeholder={pattern.placeholder}
            key={pattern.key}
            className='child'
            classNamePrefix="filter" 
            onChange={
              (choice) => {selectData[pattern.key] = choice}
            }
          />)
          }
      )}
      </>
  )
}

export {Selects}