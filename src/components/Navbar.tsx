export default function Description() {
  return (
    <div className="flex justify-between py-4 px-16">
      <h1>JEST HALNY?</h1>
      <div>
        <select
          className="p-4 bg-transparent border border-zinc-900"
          name="language"
          id="1"
        >
          <option value="English">English</option>
          <option value="Polish">Polish</option>
        </select>
      </div>
    </div>
  );
}
