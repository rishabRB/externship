import React,{useEffect,useState} from 'react'
import styled  from 'styled-components'
import axios from 'axios'


const Container=styled.div`
width: 100wv;
height: 100vh;
background:url("https://images.pexels.com/photos/5641976/pexels-photo-5641976.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
background-size: 100vw 100vh;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`
const NameContainer=styled.div`
width:300px;
height:200px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ffffff10;
backdrop-filter: blur(12px);
--webkit-backdrop-filter:blur(12px);
border-radius: 20px;
`

const Table=styled.table`

`

const Row=styled.tr`
display: flex;
align-items: center;
justify-content: space-between;
`


const RowItem=styled.th`
padding:10px 40px;
`  

const Home = () => {

    const [datas,setDatas]=useState([]);

    const fetchdata=async()=>{
        await axios("https://random-data-api.com//api/appliance/random_appliance?size=3")
        .then((res)=>{
          setDatas(res.data)
        })
    }

    useEffect(() => {
      fetchdata();
    },[])

    return (
        <Container>
           <NameContainer>
                <Table>
                    <Row>
                        <RowItem >Name</RowItem>
                        <RowItem>ID</RowItem>
                    </Row>
                    {
                    datas.sort((a,b)=>(a.id > b.id) ? 1 : (b.id> a.id) ? -1 : 0).map((data)=>(
                        <Row>
                            <RowItem>{data.brand}</RowItem>
                            <RowItem>{data.id}</RowItem>
                        </Row>
                    ))
                    }
                </Table>
           </NameContainer>
        </Container>
    )
}

export default Home
