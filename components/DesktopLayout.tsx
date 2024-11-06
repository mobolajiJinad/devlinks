import PreviewSection from "@/components/PreviewSection";

const DesktopLayout = ({
  rightComponent,
}: {
  rightComponent: React.ReactNode;
}) => {
  return (
    <div>
      <div>
        <PreviewSection />
      </div>
      <div>{rightComponent}</div>
    </div>
  );
};

export default DesktopLayout;
