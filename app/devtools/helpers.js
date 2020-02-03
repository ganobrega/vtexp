import React from 'react';
import { omit } from 'lodash';
import { Heading, Header, Box, Button, Menu, Table, TableHeader, TableRow, TableCell, TableBody, Text } from 'grommet';


/**
 *
 * @param {*} data
 * Data Structure:
 * {
 *  headers: [],
 *  items: [],
 * }
 */
export const TableIt = ({ data }) => {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {data.headers.map(header => {
            return (
              <TableCell scope="col" border="bottom"> {header.label} </TableCell>
            )
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.items.map(item => {
          return (
            <TableRow>
              {data.headers.map(header => {
                let props = omit(header, ['label', 'name']);
                return (
                  <TableCell scope="row">
                    <Text size="normal" {...props}>{item[header.name]}</Text>
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
