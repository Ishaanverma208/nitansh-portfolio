export default function ExcelPreview({ imageSrc, companyName }) {
  return (
    <div className="excel-preview-container">
      <img
        src={imageSrc}
        alt={`${companyName} financial model preview`}
        className="excel-preview-image"
      />
      <div className="excel-blur-overlay" />
      <div className="excel-lock-overlay">
        <span className="text-5xl">🔒</span>
        <p className="text-center text-sm font-medium text-white md:text-base">
          Full Model — Contact to Access
        </p>
      </div>
    </div>
  );
}
