import { Flex , SimpleGrid , Box , Text, theme} from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/index";
import { Header } from "../components/Header/index" ;
import dynamic from 'next/dynamic'

//just will be called when the user require 
const Chart = dynamic(() => import('react-apexcharts'),{
    ssr:false,
}) 

const options ={
    chart:{
        toolbar:{
            show:false,
        },
        zoom:{
            enabled:false,
        },
        foreColor:theme.colors.gray[500]
    },
    grid:{
        show:false
    },
    dataLabels:{
        enabled:false,
    },
    tooltip:{
        enabled:false,
    },
    xaxis:{
    
        axisBorder:{
            color:theme.colors.gray[600]
        },
        axisTicks:{
            color:theme.colors.gray[600]
        },
        
        categories:[
            'Domingo',
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sábado'
        ]
    },
    fill:{
        opacity:0.3,
        type:'gradient',
        gradient:{
            shade:'dark',
            opacityFrom:0.7,
            opacityTo:0.3,
        }
    }
}

const series = [
    {
        name:'series 1',
        data:[1,2,3,4,5,6,7]
    }
]

export default function Dashboard(){

    return(

        <Flex direction="column" h= "100vh">
            <Header/>

            <Flex width="100%" my ="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <SimpleGrid flex = "1" gap ="4" minChildWidth="320px" align = "flex-start">
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4" >Inscritos da Semana</Text>
                        <Chart type="area" height = {160} options ={options} series={series}/>
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4" >Taxa de Abertura</Text>
                        <Chart type="area" height = {160} options ={options} series={series}/>

                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}