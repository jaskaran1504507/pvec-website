import { Modal, Popconfirm } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
import uploadedImg from './uploadedImage.png';

const UploadDocument = ({ name, fileList, setFileList, noHeading, removeDocument }: any) => {
  const [pdfUrl, setPdfUrl] = useState<string>();
  const [previewModal, setPreviewModal] = useState(false);
  const [isImage, setIsImage] = useState('');

  // const fileSizeConvertor = (size) => {
  //   if (size && size / 1024 / 1024 > 0) {
  //     const newSize = (size / 1024 / 1024).toFixed(2);
  //     return `${newSize} MB`;
  //   }
  //   return null;
  // };
  return (
    <div className="w-full ">
      {!noHeading && (
        <div className="text-base text-gray-900 font-semibold p-2 border-b">
          {`Uploaded ${name || 'documents'}`}
        </div>
      )}
      {/* <div className="flex space-x-4"> */}
      {fileList?.map((uploadedDoc: any) => (
        <div
          key={uploadedDoc?.id}
          className="flex items-center justify-between mb-2 border rounded-lg bg-gray-100 border-dashed "
        >
          <div className="p-2">
            <img src={uploadedImg} width={40} alt="upload-image1" />
          </div>
          <div className="p-2 flex-auto flex w-1/3">
            <div className="text-xs text-blue-800 font-semibold truncate leading-none">
              {uploadedDoc?.name || uploadedDoc?.fileName}
            </div>
          </div>
          <div className="flex items-center px-2">
            <div>
              <EyeOutlined
                className="text-base text-blue-600 font-bold"
                onClick={() => {
                  setPreviewModal(true);
                  setIsImage(uploadedDoc?.type || uploadedDoc?.mimeTypeId || uploadedDoc.fileType);
                  if (uploadedDoc?.downloadUrl) {
                    setPdfUrl(uploadedDoc?.downloadUrl);
                  } else if (uploadedDoc?.url) {
                    setPdfUrl(uploadedDoc?.url);
                  } else if (uploadedDoc.Location) {
                    setPdfUrl(uploadedDoc.Location);
                  } else {
                    setPdfUrl(URL.createObjectURL(uploadedDoc));
                  }
                }}
              />
            </div>
            {removeDocument && (
              <div className="pr-2 pl-4">
                <Popconfirm
                  className="w-full"
                  placement="top"
                  title={<span>Are you sure to delete this document?</span>}
                  onConfirm={(e: any) => {
                    e.stopPropagation();
                    let pData;
                    if (uploadedDoc?.downloadUrl) {
                      pData = fileList.filter((p: any) => p.id !== uploadedDoc.id);
                      if (removeDocument) {
                        removeDocument(uploadedDoc?.id);
                      }
                    } else if (uploadedDoc.url) {
                      pData = fileList.filter((p: any) => !p.url.includes(uploadedDoc.url));
                    } else {
                      pData = fileList.filter((p: any) => p?.uid !== uploadedDoc?.uid);
                    }
                    setFileList(pData);
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteOutlined className="text-red-600" />
                </Popconfirm>
                {/* <DeleteOutlined
                  className="text-red-600"
                  onClick={() => {
                    let pData;
                    if (uploadedDoc?.downloadUrl) {
                      pData = fileList.filter((p: any) => p.id !== uploadedDoc.id);
                      if (removeDocument) {
                        removeDocument(uploadedDoc?.id);
                      }
                    } else if (uploadedDoc.url) {
                      pData = fileList.filter((p: any) => !p.url.includes(uploadedDoc.url));
                    } else {
                      pData = fileList.filter((p: any) => p?.uid !== uploadedDoc?.uid);
                    }
                    setFileList(pData);
                  }}
                /> */}
              </div>
            )}
          </div>
        </div>
      ))}
      {/* </div> */}

      <Modal
        onCancel={() => setPreviewModal(false)}
        visible={previewModal}
        centered
        title="Document Preview"
        footer={null}
        bodyStyle={{ margin: 0, padding: 0, height: '100%', width: '100%' }}
      >
        <div className="flex justify-center h-full w-full">
          {isImage?.includes('image') && (
            <img
              style={{
                width: '100%',
                height: '100%',
              }}
              src={pdfUrl}
            />
          )}
          {isImage?.includes('pdf') && (
            <iframe
              style={{
                width: '100%',
                height: '100%',
              }}
              src={pdfUrl}
              frameBorder="0"
            />
          )}
          {isImage?.includes('video') && (
            <video
              style={{
                width: '100%',
                height: '100%',
              }}
              controls
            >
              <source src={pdfUrl} type="video/mp4" />
            </video>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default UploadDocument;
