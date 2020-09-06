import React, { Fragment,useState } from 'react'
import { getProducts } from './helper/apicall'
import { API } from './backend'

export default function Search(props) {
    const yrs=[
        {
            "_id":"2006",
            "name":"2006"
        },
        {
            "_id":"2007",
            "name":"2007"
        },
        {
            "_id":"2008",
            "name":"2008"
        },
        {
            "_id":"2009",
            "name":"2009"
        },
        {
            "_id":"2010",
            "name":"2010"
        },
        {
            "_id":"2011",
            "name":"2011"
        },
        {
            "_id":"2012",
            "name":"2012"
        },
        {
            "_id":"2013",
            "name":"2013"
        },
        {
            "_id":"2014",
            "name":"2014"
        },
        {
            "_id":"2015",
            "name":"2015"
        },
        {
            "_id":"2016",
            "name":"2016"
        },
        {
            "_id":"2017",
            "name":"2017"
        },
        {
            "_id":"2018",
            "name":"2018"
        },
        {
            "_id":"2019",
            "name":"2019"
        },
        {
            "_id":"2020",
            "name":"2020"
        }

]

const [flag, setFlag] = useState(false)
const type="launch_success"

const handleChange = (id) => {
   //ttps://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014

   const newFilter = {...props.filters, land_success: true, launch_year: id}

   props.setFilters(newFilter);
  };

    return (
        <>
        <span className="text-strong">Launch Year<hr/></span>
        {
            yrs.map((v,i)=>(
                <button className="btn btn-success m-2" onClick={()=>handleChange(v._id)} key={i}>{v.name}</button>   
            )
            )

           

        }
        <br/>
        
        </>
    )
}
