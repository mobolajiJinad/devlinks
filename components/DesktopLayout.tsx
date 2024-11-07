import PreviewSection from "@/components/PreviewSection";

const DesktopLayout = ({
  rightComponent,
}: {
  rightComponent: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <PreviewSection />
      </div>
      <div>{rightComponent}</div>
    </div>
  );
};

export default DesktopLayout;
