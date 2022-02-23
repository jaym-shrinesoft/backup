import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { prop, groupBy } from 'ramda';

export default function MergeTable() {
    const data2 = [
        {
            region: "ASPAC",
            sector: "Consumer",
            ios: 1,
            android: 16,
            total: 17,
            verified: 17,
            notVerified: 0,
            reVerify: 0
        },
        {
            region: "ASPAC",
            sector: "Medical Devices",
            ios: 121,
            android: 94,
            total: 215,
            verified: 103,
            notVerified: 112,
            reVerify: 0
        },
        {
            region: "ASPAC",
            sector: "Pharma",
            ios: 110,
            android: 193,
            total: 303,
            verified: 231,
            notVerified: 72,
            reVerify: 0
        },
        {
            region: "ASPAC",
            sector: "Vision",
            ios: 153,
            android: 210,
            total: 363,
            verified: 347,
            notVerified: 16,
            reVerify: 0
        },
        {
            region: "EMEA",
            sector: "Consumer",
            ios: 3,
            android: 48,
            total: 51,
            verified: 51,
            notVerified: 0,
            reVerify: 0
        },
        {
            region: "EMEA",
            sector: "Medical Devices",
            ios: 119,
            android: 66,
            total: 185,
            verified: 106,
            notVerified: 79,
            reVerify: 0
        },
        {
            region: "EMEA",
            sector: "Pharma",
            ios: 341,
            android: 469,
            total: 810,
            verified: 623,
            notVerified: 187,
            reVerify: 0
        },
        {
            region: "EMEA",
            sector: "Vision",
            ios: 27,
            android: 87,
            total: 114,
            verified: 101,
            notVerified: 13,
            reVerify: 0
        },
        {
            region: "LA",
            sector: "Consumer",
            ios: 12,
            android: 0,
            total: 12,
            verified: 12,
            notVerified: 0,
            reVerify: 0
        },
        {
            region: "LA",
            sector: "Medical Devices",
            ios: 16,
            android: 37,
            total: 53,
            verified: 53,
            notVerified: 0,
            reVerify: 0
        },
        {
            region: "NA",
            sector: "Consumer",
            ios: 178,
            android: 275,
            total: 453,
            verified: 453,
            notVerified: 0,
            reVerify: 0
        },
        {
            region: "NA",
            sector: "Corporate",
            ios: 344,
            android: 270,
            total: 614,
            verified: 473,
            notVerified: 141,
            reVerify: 0
        },
        {
            region: "NA",
            sector: "Medical Devices",
            ios: 159,
            android: 267,
            total: 426,
            verified: 228,
            notVerified: 198,
            reVerify: 0
        },
        {
            region: "NA",
            sector: "Pharma",
            ios: 42,
            android: 82,
            total: 124,
            verified: 124,
            notVerified: 0,
            reVerify: 0
        },
        {
            region: "NA",
            sector: "Vision",
            ios: 30,
            android: 9,
            total: 39,
            verified: 7,
            notVerified: 32,
            reVerify: 0
        }
    ]

    const newData = groupBy(prop("region"), data2)
    console.log(newData);
    const graphData = {
        ios: 341,
        android: 469,
        total: 810,
        verified: 623,
        notVerified: 187,
        reVerify: 0
    }

    const renderTotal = (key, data) => {
        let ios = 0;
        let android = 0;
        let grandTotal = 0;
        let verified = 0;
        let notVerified = 0;
        let reVerify = 0;
        data[key].forEach(element => {
            ios += element.ios;
            android += element.android;
            grandTotal += element.total;
            verified += element.verified;
            notVerified += element.notVerified;
            reVerify += element.reVerify;
        });
        return (
            <tr>
                <td className='fw-bold'>Total</td>
                <td className='fw-bold'>{ios}</td>
                <td className='fw-bold'>{android}</td>
                <td className='fw-bold'>{grandTotal}</td>
                <td className='fw-bold'>{verified}</td>
                <td className='fw-bold'>{notVerified}</td>
                <td className='fw-bold'>{reVerify}</td>
            </tr>
        )
    }
    
    return (
        <>
            {/* <div className='parent-div container'>
                <h3 className='align-center'>Center</h3>
                <h3 className='align-right'>Right</h3>
            </div> */}
            <Container>
                {/* <Table bordered className='my-3' size="sm">
                    <thead className='bg-light'>
                        <tr>
                            <th>Region</th>
                            <th>Sector</th>
                            <th>iOS</th>
                            <th>Android</th>
                            <th>Total</th>
                            <th>Verified</th>
                            <th>Not Verified</th>
                            <th>Re Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data2.map((indData, index) => (
                            <tr key={index}>
                                {regionformattor(indData.region, "region", index)}
                                <td>{indData.sector}</td>
                                <td>{indData.ios}</td>
                                <td>{indData.android}</td>
                                <td>{indData.total}</td>
                                <td>{indData.verified}</td>
                                <td>{indData.notVerified}</td>
                                <td>{indData.reVerify}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table> */}
                <Table bordered className='my-3' size="sm">
                    <thead className='bg-light'>
                        <tr>
                            <th>Region</th>
                            <th>Sector</th>
                            <th>iOS</th>
                            <th>Android</th>
                            <th>Grand Total</th>
                            <th>Verified</th>
                            <th>Not Verified</th>
                            <th>Re Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(newData).map((key, outerIndex) => {
                                return (
                                    <>
                                        {newData[key].map((indexData, index) => {
                                            return (
                                                <tr>
                                                    {index === 0 ? <td rowSpan={newData[key].length + 1}>{indexData.region}</td> : null}
                                                    <td>{indexData.sector}</td>
                                                    <td>{indexData.ios}</td>
                                                    <td>{indexData.android}</td>
                                                    <td>{indexData.total}</td>
                                                    <td>{indexData.verified}</td>
                                                    <td>{indexData.notVerified}</td>
                                                    <td>{indexData.reVerify}</td>
                                                </tr>
                                            )
                                        })}
                                        {renderTotal(key, newData)}
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
