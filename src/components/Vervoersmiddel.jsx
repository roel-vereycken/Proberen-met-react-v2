import React, {useState, useEffect} from 'react'
import {
    Center, UnorderedList, ListItem, 
    Input,
    FormControl,
    Flex,
    Text,
    Box
  } from '@chakra-ui/react';
import {Link, useHistory} from 'react-router-dom';

function Vervoersmiddel() {
  let userId = localStorage.getItem("user");
  userId = JSON.parse(userId);
  let id = userId.user

    const [naam, setNaam] = useState('');
    const [prijs, setPrijs] = useState();
    const [datum, setDatum] = useState();
    const [categorie, setCategorie] = useState();

    const [tarieven, setTarieven] = useState([])
    
    const [user, setUser] = useState(id);

    const [settings, setSettings] = useState([])
    const [loading, setLoading] = useState(true)

    const [click, setClick] = useState(0)
    const [submit, setSubmit] = useState(0)

    const [fetchCall, setFetchCall] = useState()

    const history = useHistory();

    /**
     * Haal de lijst van vervoersmiddels op
     */
    useEffect(() => {
<<<<<<< HEAD
      fetch("https://127.0.0.1:8000/api/vervoersmiddels.json?user.id=1")
=======
      

      fetch(`http://127.0.0.1:8000/api/vervoersmiddels.json?user.id=${user}`)
>>>>>>> 022b36791c9c2a05a396123506fed79ae3046670
      .then(resp => resp.json())
      .then(data => {
          console.log("data", data)
          console.log("settings", settings)
          setSettings(data)
          
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
    
    }, [submit])

    /**
     * Zet de juiste gevevens uit db in form na aanklikken van bestaand vervoersmiddel
     */
    useEffect(() => {
      setFetchCall(window.location.search.slice(1))  
    }, [click])

    useEffect(() => {
      if (fetchCall){
        fetch(`http://127.0.0.1:8000/api/vervoersmiddels/${fetchCall}`)
          .then(resp => resp.json())
          .then(data => {
              setNaam(data.naam)
              setPrijs(data.tarieven[0].prijs)
              //setDatum(data.tarieven[0].datum)
              setCategorie("")
              setTarieven(data.tarieven)
              console.log("tarieven", data.tarieven)
      })
          .catch(error => console.error(error))
          .finally(() => setLoading(false))
      }
    }, [fetchCall])

    /**
     * Verzenden van het formulier
     */
    const handleVervoersmiddelFormSubmit = (e) => {
    e.preventDefault();
    console.log(fetchCall)
    if (!fetchCall){
      fetch('http://127.0.0.1:8000/api/vervoersmiddels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            naam: naam,
            "tarieven": [
                {
                prijs: Number(prijs),
                datum: datum,
                "published": true
                }
                    ],
            user: `/api/users/${user}`,
            categorie: "/api/categories/1"
        }),
      })
      .then(response => response.json())
        .then(data => {
          console.log('gelukt');
          console.log(data);
          console.log(naam)
        })
        .catch(error => {
          console.log('mislukt');
          console.log(error);
        })
        .finally(() => {
          setNaam('');
          setPrijs(0);
          //setDatum();
          setCategorie();
          setSubmit(submit + 1)
        });
    }else {
      fetch(`http://127.0.0.1:8000/api/vervoersmiddels/${fetchCall}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            naam: naam
        }),
      })
      .then(response => response.json())
      .then(data => {
          console.log('gelukt');
          setClick(0)
          
          setTarieven([])
          history.push('/vervoersmiddel')
        })
        .catch(error => {
          console.log('mislukt');
          console.log(error);
        })
        .finally(() => {
          setNaam('');
          setPrijs(0);
          setDatum();
          setCategorie();
          setSubmit(submit + 1)
          setFetchCall()
        });
    }
    
    }

    return (
        <>
            <FormControl>
          <form onSubmit={handleVervoersmiddelFormSubmit}>
          
            <Flex align="center" justify="center" flexDirection="column">
            <Box width="20%" minWidth="300px" paddingTop="50px" pb="50px">
              <Text fontSize="25px" mb="3" color="#00326f" mt="0px">
                VERVOERSMIDDEL
              </Text>

              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Naam:
              </Text>
              <Input
                type="text"
                name="naam"
                value={naam}
                placeholder="Naam"
                onChange={e => setNaam(e.target.value)}
              />

              <UnorderedList marginLeft="-40">
                      
                      
              {tarieven && tarieven.map((tarief) => {
                
                return (
                  <>
                    <ListItem id={tarief.id}><Text fontSize="16px" color="#3cf0f0">€{tarief.prijs}/km,<br/> vanaf: {tarief.datum}</Text></ListItem>
                  </>
                )
              })}

              </UnorderedList>

              {!click && (<>
              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Prijs:
              </Text>
              <Input
                type="number"
                step="0.1"
                name="prijs"
                value={prijs}
                placeholder="0"
                onChange={e => setPrijs(e.target.value)}
              />

              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Datum:
              </Text>
              <Input

                type="date"
                name="datum"
                value={datum}
                //placeholder="Wachtwoord"
                onChange={e => setDatum(e.target.value)}
              />
              <Text fontSize="16px" mb="3" color="#3cf0f0">
                Categorie:
              </Text>
              <select name="categorie"  value={categorie} onChange={e => {setCategorie(e.target.value)}}>
                        <option id="0"></option>
                        <option id="1">Auto</option>
                        <option id="2">Fiets</option>
                        </select>
              </>)}
              <Input
                      mt="15px"
                      w="100%"
                      id="buttonHover"
                      type="submit"
                      height="30px"
                      value="Registreer" 
                      color="white"
                      bg="#00326f"
                      borderRadius="5"
                      />
              </Box>
            </Flex>
            
          </form>
        </FormControl>

        <div>
            <Center>
            <Box>
            <Flex align="center">
            <Text fontWeight="extrabold" color="#00326f"  fontSize={32}>OVERZICHT</Text>
            
                      </Flex>
                      <UnorderedList>
                        {settings && settings.map((row) => {
                          
                          return(
                            <Link key={row.id} to={`/vervoersmiddel/id?${row.id}`} onClick={() => setClick(click+1)}><ListItem color="white">{row.naam}</ListItem></Link>
                          )
                          
                        })}
                      </UnorderedList>
                    </Box>
                    </Center>
        </div>
       </> 
    )
}

export default Vervoersmiddel
