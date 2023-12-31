'use client'

import React from 'react';
import type {CreateStudentProps} from "./CreateStudent.props";
import {Button, FormControl, FormHelperText, FormLabel, Heading, HStack, Input, InputGroup, InputLeftAddon, Stack, Textarea, useToast} from "@chakra-ui/react";
import {createStudentAction} from "@/actions/student";
import {useForm} from "react-hook-form";

export function CreateStudent({...props}:CreateStudentProps) {
  const toast = useToast()

  const { handleSubmit, register, reset } = useForm<any>();

  const handleFormSubmit = (data: any) => {
    createStudentAction(data).then(() => {
      toast({
        title: 'Створення учня пройшло успішно',
        status: 'success',
        isClosable: true
      })

      reset();
    }).catch(err => {
      console.log('Error', err)

      toast({
        title: 'Щось пішло не так...',
        status: 'error',
        isClosable: true
      })
    })
  }

  return (
    <>
      <Heading
        as="h1"
        size="xl"
        noOfLines={1}
        mb="0.5rem"
      >
        Створення картки учня
      </Heading>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Stack
          p="1rem"
          shadow="lg"
        >
          <Heading
            as="h2"
            size="lg"
            noOfLines={1}
            mb="0.5rem"
          >
            Основна інформація
          </Heading>
          <HStack>
            <FormControl
              flex={1}
              isRequired
            >
              <FormLabel mb="0.25rem">ПІБ дитини</FormLabel>
              <Input
                {...register("name")}
                placeholder="П'яточкін Петро Петрович"
                size="md"
              />
              <FormHelperText mt="0.25rem">Повне ім&apos;я учня через пробіл</FormHelperText>
            </FormControl>
            <FormControl
              flex={1}
              isRequired
            >
              <FormLabel mb="0.25rem">Дата народження</FormLabel>
              <Input
                {...register("born")}
                placeholder="Оберіть дату народження"
                size="md"
                type="date"
              />
              <FormHelperText mt="0.25rem">Оберіть дату натиснувши на іконку календаря</FormHelperText>
            </FormControl>
            <FormControl
              flex={1}
              isRequired
            >
              <FormLabel mb="0.25rem">Домашня адресса</FormLabel>
              <Input
                {...register("address")}
                placeholder="вул.Чарівна 2/71"
                size="md"
              />
              <FormHelperText mt="0.25rem">
                Дотримуйтесь формату <i>вул.Чарівна 2/71</i>
              </FormHelperText>
            </FormControl>
          </HStack>
          <HStack>
            <FormControl flex={1}>
              <FormLabel mb="0.25rem">Телефон</FormLabel>
              <InputGroup>
                <InputLeftAddon>+38</InputLeftAddon>
                <Input
                  type="tel"
                  {...register("phone")}
                  placeholder="0978886655"
                />
              </InputGroup>
              <FormHelperText mt="0.25rem">Введіть контактний номер телефону</FormHelperText>
            </FormControl>
            <FormControl flex={1}>
              <FormLabel mb="0.25rem">ПІБ батька</FormLabel>
              <Input
                {...register("fatherName")}
                placeholder="П'яточкін Петро Петрович"
              />
              <FormHelperText mt="0.25rem">Введіть повне ім&apos;я батька</FormHelperText>
            </FormControl>
            <FormControl flex={1}>
              <FormLabel mb="0.25rem">ПІБ матері</FormLabel>
              <Input
                {...register("motherName")}
                placeholder="П'яточкіна Петрина Петрівна"
              />
              <FormHelperText mt="0.25rem">Введіть повне ім&apos;я матері</FormHelperText>
            </FormControl>
          </HStack>

          <FormControl flex={1}>
            <FormLabel mb="0.25rem">Примітка</FormLabel>
            <Textarea
              {...register("description")}
              placeholder="Текст примітки..."
              size="md"
            />
            <FormHelperText mt="0.25rem">Опишіть додаткову інформацію, яку важливо зазначити про учня</FormHelperText>
          </FormControl>

          <Button
            colorScheme="green"
            mt="0.5rem"
            type="submit"
          >
            Створити картку учня
          </Button>
        </Stack>
        {/*<Stack*/}
        {/*  p="1rem"*/}
        {/*  shadow="lg"*/}
        {/*>*/}
        {/*  <Heading*/}
        {/*    as="h2"*/}
        {/*    size="lg"*/}
        {/*    noOfLines={1}*/}
        {/*    mb="0.5rem"*/}
        {/*  >*/}
        {/*    Види позанавчальної діяльності*/}
        {/*  </Heading>*/}
        {/*  <HStack>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="blue"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Музична школа*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="blue"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Музична школа*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="blue"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Музична школа*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="blue"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Музична школа*/}
        {/*    </Checkbox>*/}
        {/*  </HStack>*/}
        {/*  <Button*/}
        {/*    colorScheme="blue"*/}
        {/*    mt="0.5rem"*/}
        {/*    onClick={() =>*/}
        {/*      toast({*/}
        {/*        title: `"Види позанавчальної діяльності" успішно збережені`,*/}
        {/*        status: 'success',*/}
        {/*        isClosable: true,*/}
        {/*      })*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Зберегти*/}
        {/*  </Button>*/}
        {/*</Stack>*/}
        {/*<Stack*/}
        {/*  p="1rem"*/}
        {/*  shadow="lg"*/}
        {/*>*/}
        {/*  <Heading*/}
        {/*    as="h2"*/}
        {/*    size="lg"*/}
        {/*    noOfLines={1}*/}
        {/*    mb="0.5rem"*/}
        {/*  >*/}
        {/*    Соціальна поведінка учнів*/}
        {/*  </Heading>*/}
        {/*  <HStack>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="orange"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Девіантна поведінка*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="orange"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Систематично порушує дисципліну на уроках, конфлікти з вчителями, інші порушення під час освітнього процесу*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="orange"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Схильний (-на) до систематичних пропусків уроків*/}
        {/*    </Checkbox>*/}
        {/*  </HStack>*/}
        {/*  <HStack>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="orange"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Група ризику (<i>тютюнопаління, вживання алкоголю, психотропні речовини, схильність до бродяжництво, інше</i>)*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="orange"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Стоїть на обліку в кримінальній поліції або наркокабінеті*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="orange"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Потребує корекції поведінки*/}
        {/*    </Checkbox>*/}
        {/*  </HStack>*/}
        {/*  <Button*/}
        {/*    colorScheme="orange"*/}
        {/*    mt="0.5rem"*/}
        {/*    onClick={() =>*/}
        {/*      toast({*/}
        {/*        title: `Дані "Соціальна поведінка учнів" успішно збережені`,*/}
        {/*        status: 'success',*/}
        {/*        isClosable: true,*/}
        {/*      })*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Зберегти*/}
        {/*  </Button>*/}
        {/*</Stack>*/}
        {/*<Stack*/}
        {/*  p="1rem"*/}
        {/*  shadow="lg"*/}
        {/*>*/}
        {/*  <Heading*/}
        {/*    as="h2"*/}
        {/*    size="lg"*/}
        {/*    noOfLines={1}*/}
        {/*    mb="0.5rem"*/}
        {/*  >*/}
        {/*    Інформація про соціальне середовище розвитку учнів*/}
        {/*  </Heading>*/}
        {/*  <HStack>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="teal"*/}
        {/*      size="lg"*/}
        {/*      defaultChecked*/}
        {/*    >*/}
        {/*      Повна сім&apos;я*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="teal"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Неповна сім&apos;я - виховує мати/бабуся*/}
        {/*    </Checkbox>*/}
        {/*    <Checkbox*/}
        {/*      flex={1}*/}
        {/*      colorScheme="teal"*/}
        {/*      size="lg"*/}
        {/*    >*/}
        {/*      Неповна сім&apos;я - виховує батько/дідусь*/}
        {/*    </Checkbox>*/}
        {/*  </HStack>*/}
        {/*  <Button*/}
        {/*    colorScheme="teal"*/}
        {/*    mt="0.5rem"*/}
        {/*    onClick={() =>*/}
        {/*      toast({*/}
        {/*        title: `Дані "Соціальна поведінка учнів" успішно збережені`,*/}
        {/*        status: 'success',*/}
        {/*        isClosable: true,*/}
        {/*      })*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Зберегти*/}
        {/*  </Button>*/}
        {/*</Stack>*/}
      </form>
    </>
  )
}
