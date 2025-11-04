export function GoogleMap({ embedUrl }: { embedUrl: string }) {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <iframe
        title="Location Map"
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
