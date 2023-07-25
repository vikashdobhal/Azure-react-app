import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Code, Button  } from '@chakra-ui/react'
function ChakraUi() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 p-5'>
                <h1 className='heading-main'>Chakra UI</h1>
                <h3>Installation</h3>
                <Tabs variant='soft-rounded' colorScheme='green'>
                  <TabList>
                    <Tab>npm</Tab>
                    <Tab>yarn</Tab>
                    <Tab>pnpm</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                        <Code colorScheme='red' children="npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion" />
                        <Button colorScheme='teal' size='xs' ml='2'>Copy</Button>
                    </TabPanel>
                    <TabPanel>
                        <Code colorScheme='red' children="yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion" />
                        <Button colorScheme='teal' size='xs' ml='2'>Copy</Button>
                    </TabPanel>
                    <TabPanel>
                      <Code colorScheme='red' children="pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion" />
                      <Button colorScheme='teal' size='xs' ml='2'>Copy</Button>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
            </div>
        </div>
    </div>
  )
}

export default ChakraUi