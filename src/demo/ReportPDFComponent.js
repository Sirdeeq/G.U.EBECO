import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const ReportPDFComponent = ({ data }) => {
    const styles = StyleSheet.create({
        page: {
            padding: 20,
        },
        header: {
            marginBottom: 20,
        },
        headerText: {
            fontSize: 12,
            marginBottom: 5,
            color: 'black',
        },
        costSheet: {
            marginTop: 20,
        },
        costSheetTitle: {
            fontSize: 14,
            marginBottom: 10,
            fontWeight: 'bold',
            color: 'black',
        },
        costSheetItem: {
            fontSize: 12,
            marginBottom: 5,
            color: 'black',
        },
    });

    const renderHeader = () => {
        if (!data) {
            return null; // Return null or a loading indicator while data is being fetched
        }

        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Name: {data.name}</Text>
                <Text style={styles.headerText}>Number: {data.number}</Text>
                <Text style={styles.headerText}>Site Address: {data.siteAddress}</Text>
                <Text style={styles.headerText}>Person in Charge Number: {data.personInChargeNumber}</Text>
                <Text style={styles.headerText}>Physical Measurement Taken by: {data.physicalMeasurementTakenBy}</Text>
                <Text style={styles.headerText}>Text then Color: {data.textThenColor}</Text>
                <Text style={styles.headerText}>Job Order: {data.jobOrder}</Text>
                <Text style={styles.headerText}>Quotation Number: {data.quotationNumber}</Text>
            </View>
        );
    };

    const renderCostSheet = () => {
        if (!data || !data.costSheetItems) {
            return null; // Return null or a loading indicator while data is being fetched
        }

        return (
            <View style={styles.costSheet}>
                <Text style={styles.costSheetTitle}>Cost Sheet</Text>
                {/* Iterate over cost sheet items and display them */}
                {data.costSheetItems.map((item) => (
                    <Text key={item.id} style={styles.costSheetItem}>
                        {item.title}
                    </Text>
                ))}
            </View>
        );
    };

    return (
        <Document>
            <Page style={styles.page}>
                {renderHeader()}
                {renderCostSheet()}
            </Page>
        </Document>
    );
};

export default ReportPDFComponent;
