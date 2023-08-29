from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle
import json
import time 

def json_to_pdf(json_data, output_filename):
    data = json_data
    current_timestamp = str(int(time.time()))
    output_filename_path = "./myapp2/public/"+output_filename+current_timestamp+".pdf"
    doc = SimpleDocTemplate(output_filename_path, pagesize=letter)
    styles = getSampleStyleSheet()

    # Convert JSON data to Python dictionary
    

    # Create a list to hold the elements of the PDF
    elements = []
    

    # Loop through the dictionary and create a table from the key-value pairs
    for key, value in data.items():
        table_data = [[key, str(value)]]
        table = Table(table_data, colWidths=[200, 200])
        table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (0, 0), colors.lightgrey),
            ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
            ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
            ('FONTNAME', (0, 0), (0, 0), 'Helvetica'),
            ('TEXTCOLOR', (0, 0), (-1, -1), colors.black),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ]))
        elements.append(table)

    doc.build(elements)
    return output_filename+current_timestamp+".pdf"

