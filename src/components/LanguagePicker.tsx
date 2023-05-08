export default function LanguagePicker() {
  return (
    <div className="flex justify-end pb-4 text-stone-50">
      <select
        className="p-2 bg-transparent border border-stone-50"
        name="language"
        id="1"
      >
        <option value="English">English</option>
        <option value="Polish">Polish</option>
      </select>
    </div>
  );
}
