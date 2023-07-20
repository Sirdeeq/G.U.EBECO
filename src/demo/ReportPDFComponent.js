import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const ReportPDFComponent = () => {
    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "center",
            color: "grey",
        },
        pageNumber: {
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            color: "grey",
            textAlign: "center",
        }
    })
    return (
        <div className="p-2 m-4 shadow-sm">
            <div className="max-w-md mx-auto bg-slate-900 rounded-md shadow-md p-6">
                <Document>
                    <Page style={styles.body}>
                        <Text style={styles.header} fixed>
                            Aging Breakthrough: Scientists Discover a New Molecule That Can Purge “Zombie” Cells
                        </Text>
                        <Text>
                            
                        </Text>
                        <Text
                            style={styles.pageNumber}
                            fixed
                            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                        />
                    </Page>
                </Document>
            </div>
        </div>
    )
}

export default ReportPDFComponent;
