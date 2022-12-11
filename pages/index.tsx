import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Text, Image, Center, GridItem, Heading, Grid, Input, Checkbox, CheckboxGroup, Button,  } from '@chakra-ui/react';
import { Tab } from './Tab'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState, useEffect } from 'react'
import { StoreType } from './storeType';
import axios from "./axios";
import request from "./request";

export default function Home() {

  // 入力キーワード
  const [inputValue, setInputValue] = useState("");
  // itemsのListを表示・非表示を切替。onClick で true を渡して表示させる
  const [showLists, setShowLists] = useState(false);
  // カテゴリー
  const [categories, setCategories] = useState();
  // 検索したものの情報
  const [filteredStores, setfilteredStores] = useState();
  //APIから取ってきた店情報
  const [storeData, setStoreDate] = useState([]);
  const [query, setQuery] = useState("");

  const [sorts, setSorts] = useState([
    '和食',
    'イタリアン',
    'フレンチ',
    '中華',
  ]);

  //チェックボックスの状態を監視
  const onChangeSort = (event: { target: { checked: boolean; value: string; }; }) => event.target.checked
    ? setSorts([...sorts, event.target.value])
    : setSorts(sorts.filter((sport) => sport.match(event.target.value) === null));

  //住所入力フォームに入力された値を保持
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // search(e.target.value);
    console.log(inputValue)
    console.log(setInputValue)
  };



  //TODO APIから取得
  useEffect(() => {
    axios.get('http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=e37192690e181c31&lat=34.67&lng=135.52&range=5&order=4',{
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    })//URL
    .then(res => {
      setStoreDate(res.data)
      console.log(res);
    })
    .catch(error=>{
      //失敗した時の処理
      console.log('エラーやで');
      console.log(typeof(error));
    })
}, [])


  // useEffect(() => {
  //   async function fetchData() {
  //     console.log("データを取得します");
  //     console.log(query);

  //     await axios
  //       .get(request.fetchStore)//URL
  //       .then((res) => {
  //         console.log(res);
  //         // APIがうまく動作していない時のエラー
  //         if (res.status !== 200) {
  //           throw new Error("APIがうまく動作していないようです");
  //         }
  //         // 検索ワードが存在しない場合のエラーメッセージ
  //         if (res.data.results == null) {
  //           setInputValue("検索条件が見つかりませんでした");
  //           return;
  //         }
  //         // 取得した店情報を格納
  //         const { data } = res.data;
  //         console.log(data);
  //         setStoreDate(data);
  //         console.log(storeData);
        

  //       if (query) fetchData(); // 郵便番号が入力されてたら実行
  //         }, [query]); /// zipの値が更新されたら実行

  //         const addInputValue = () => {
  //           if (inputValue === "") {
  //             alert("入力してください");
  //             return;
  //           }
  //           setQuery(inputValue);
  //         };
          

        
  //   }
  // }
  // );



  return (
    <>
      <Tab />

      <Box paddingTop={'250px'} width='50%' margin={'0px auto'}>
      
        <Box textAlign={'center'}>
          <Text></Text>
          <Input 
            placeholder='住所を入力' size='lg' width='80%'
            type="text" value={inputValue} onChange={handleChange}
          />
        </Box>

        <Box paddingTop={'50px'}>
          <Text fontSize='3xl'>ジャンル</Text>
          <Box textAlign={'center'} paddingTop={'20px'}>
            <Checkbox paddingRight={'60px'} size='lg' onChange={onChangeSort} value='和食'>和食</Checkbox>
            <Checkbox paddingRight={'60px'} size='lg' onChange={onChangeSort} value='イタリアン'>イタリアン</Checkbox>
            <Checkbox paddingRight={'60px'} size='lg' onChange={onChangeSort} value='フレンチ'>フレンチ</Checkbox>
            <Checkbox paddingRight={'60px'} size='lg' onChange={onChangeSort} value='中華'>中華</Checkbox>
            <Checkbox paddingRight={'60px'} size='lg' onChange={onChangeSort} value='和食'>和食</Checkbox>
          </Box>
          <Box textAlign={'center'} paddingTop={'20px'}>
            <Checkbox paddingRight={'60px'} size='lg' >和食</Checkbox>
            <Checkbox paddingRight={'60px'} size='lg' >和食</Checkbox>
            <Checkbox paddingRight={'60px'} size='lg' >和食</Checkbox>
            <Checkbox paddingRight={'60px'} size='lg' >和食</Checkbox>
            <Checkbox paddingRight={'60px'} size='lg' >和食</Checkbox>
          </Box>
          <Center>
            <Button colorScheme='orange' size='lg' marginTop={'100px'} 
              >
              検索する
            </Button>
          </Center>
        </Box>

        {/* 検索結果の一覧を表示 */}
        {storeData}
        {/* <Box textAlign={'center'} paddingTop={'20px'}>
          {filteredStores.map((stores: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => {
            return (
              <Box
                key={index}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                {stores.name}
              </Box>
            )
          })}
        </Box> */}

      </Box>
    </>
  )
}
