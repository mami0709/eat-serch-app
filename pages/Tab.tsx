import { Box, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

export function Tab() {
  return (
    <>
      <div>
        <Box
          style={{
            background: '#f5ab85',
            display: 'flex',
            padding: '20px 20px',
            position: 'fixed',
            justifyContent: 'space-between',
            width: '100%',
          }}
          boxShadow='lg'
        >
          <Link href='/'>
            <Text fontSize='4xl' fontFamily='HiraMinProN-W3' color={'white'}>
              お腹減った時に気分で検索アプリ
            </Text>
          </Link>
          

        </Box>
      </div>
    </>
  );
}