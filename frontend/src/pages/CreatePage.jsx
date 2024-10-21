import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react';

const CreatePage = () => {
   const [newProduct, setNewProduct] = useState({
      name: "",
      price: "",
      image: "",
   });

   const handleAddProduct = () => {
      // Додайте логіку для додавання продукту
      console.log(newProduct);
   };

   return (
      <Container maxW={"container.sm"}>
         <Navbar />
         <VStack spacing={8}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={"8"}>
               Create New Product
            </Heading>
            <Box
               w={"full"}
               bg={useColorModeValue("white", "gray.800")}
               rounded={"lg"}
               p={8}
               shadow={"md"}
            >
               <VStack spacing={4}>
                  <Input
                     placeholder='Product Name'
                     name='name'
                     value={newProduct.name}
                     onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  />
                  <Input
                     placeholder='Price'
                     name='price'
                     type='number'
                     value={newProduct.price}
                     onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  />
                  <Input
                     placeholder='Image URL'
                     name='image'
                     value={newProduct.image}
                     onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  />
                  <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                     Add Product
                  </Button>
               </VStack>
            </Box>
         </VStack>
      </Container>
   );
};

export default CreatePage;