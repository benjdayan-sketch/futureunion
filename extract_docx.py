import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def extract_text(docx_path):
    if not os.path.exists(docx_path):
        print(f"File not found: {docx_path}")
        return

    try:
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # Namespaces
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_parts = []
            for p in tree.findall('.//w:p', ns):
                paragraph_text = []
                for node in p.iter():
                    if node.tag == f"{{{ns['w']}}}t":
                        if node.text:
                            paragraph_text.append(node.text)
                    elif node.tag == f"{{{ns['w']}}}br":
                        paragraph_text.append('\n')
                
                if paragraph_text:
                    text_parts.append(''.join(paragraph_text))
            
            return '\n'.join(text_parts)
            
    except Exception as e:
        return f"Error reading docx: {str(e)}"

if __name__ == "__main__":
    filename = "Future Union_Website Structure and Verbiage 1.11.26 vFINAL.docx"
    print(extract_text(filename))
