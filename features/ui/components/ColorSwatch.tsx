interface ColorSwatchProps {
  name: string
  hex: string
  className?: string
  textColor?: string
}

function ColorSwatch({ name, hex, className = "", textColor = "text-white" }: ColorSwatchProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className="h-24 w-full rounded-md mb-2 flex items-center justify-center"
        style={{ backgroundColor: hex }}
        title={`${name}: ${hex}`}
      >
        <span className={`text-xs font-mono ${textColor}`}>Text Sample</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium font-heading">{name}</span>
        <span className="text-xs text-zinc-400 font-mono">{hex}</span>
      </div>
    </div>
  )
}

interface ColorGroupProps {
  name: string
  base: string
  light: string
  dark: string
  lightTextColor?: string
  baseTextColor?: string
  darkTextColor?: string
}

function ColorGroup({
  name,
  base,
  light,
  dark,
  lightTextColor = "text-zinc-900",
  baseTextColor = "text-zinc-900",
  darkTextColor = "text-white",
}: ColorGroupProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-heading font-bold">{name}</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs mb-1 text-zinc-500">Light (Text)</p>
          <ColorSwatch name={`${name} Light`} hex={light} textColor={lightTextColor} />
        </div>
        <div>
          <p className="text-xs mb-1 text-zinc-500">Base</p>
          <ColorSwatch name={`${name} Base`} hex={base} textColor={baseTextColor} />
        </div>
        <div>
          <p className="text-xs mb-1 text-zinc-500">Dark (Background)</p>
          <ColorSwatch name={`${name} Dark`} hex={dark} textColor={darkTextColor} />
        </div>
      </div>
    </div>
  )
}

export function ColorPalette() {
  // Define our color palette with adjusted dark and light variants
  const colors = [
    {
      name: "Primary",
      base: "#D0FF73", // Lime green primary color
      light: "#E8FFAE", // Lighter for text
      dark: "#2C3320", // Darker, more muted for backgrounds
      lightTextColor: "text-zinc-900",
      baseTextColor: "text-zinc-900",
      darkTextColor: "text-white",
    },
    {
      name: "Green",
      base: "#00584C", // Dark green from the image
      light: "#7FBFB6", // Lighter for text
      dark: "#0A2A27", // Darker for backgrounds
      lightTextColor: "text-zinc-900",
      baseTextColor: "text-white",
      darkTextColor: "text-white",
    },
    {
      name: "Mint",
      base: "#E0F7F5", // Mint from the image
      light: "#F0FDFB", // Slightly lighter
      dark: "#1A3C39", // Dark muted version for backgrounds
      lightTextColor: "text-zinc-900",
      baseTextColor: "text-zinc-900",
      darkTextColor: "text-white",
    },
    {
      name: "Purple",
      base: "#7E57FF", // Purple from the image
      light: "#BBA5FF", // Lighter for text
      dark: "#1E1A33", // Darker for backgrounds
      lightTextColor: "text-zinc-900",
      baseTextColor: "text-white",
      darkTextColor: "text-white",
    },
    {
      name: "Lime",
      base: "#D2F171", // Lime from the image
      light: "#E6F99D", // Lighter for text
      dark: "#2D3118", // Darker for backgrounds
      lightTextColor: "text-zinc-900",
      baseTextColor: "text-zinc-900",
      darkTextColor: "text-white",
    },
    {
      name: "Turquoise",
      base: "#47EAAA", // Turquoise from the image
      light: "#A7F5D3", // Lighter for text
      dark: "#0F3328", // Darker for backgrounds
      lightTextColor: "text-zinc-900",
      baseTextColor: "text-zinc-900",
      darkTextColor: "text-white",
    },
  ]

  return (
    <div className="bg-zinc-900 p-8 rounded-lg">
      <h2 className="text-2xl font-heading font-bold mb-4">Color Palette (Development Only)</h2>
      <p className="text-zinc-400 mb-8 text-sm">
        Dark variants are intended for card/element backgrounds. Light variants are intended for text on dark
        backgrounds. Base colors are the primary brand colors.
      </p>
      <div className="space-y-12">
        {colors.map((color) => (
          <ColorGroup
            key={color.name}
            name={color.name}
            base={color.base}
            light={color.light}
            dark={color.dark}
            lightTextColor={color.lightTextColor}
            baseTextColor={color.baseTextColor}
            darkTextColor={color.darkTextColor}
          />
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-800">
        <h3 className="text-lg font-heading font-bold mb-4">Usage Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Example */}
          <div style={{ backgroundColor: "#2C3320" }} className="p-6 rounded-lg">
            <h4 className="font-heading text-white text-lg mb-2">Card with Dark Primary</h4>
            <p className="text-zinc-300 mb-4">This is how content looks on a dark primary background.</p>
            <p style={{ color: "#E8FFAE" }} className="font-medium">
              This is light primary text on dark background.
            </p>
          </div>

          {/* Button Example */}
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h4 className="font-heading text-white text-lg mb-4">Button Examples</h4>
            <div className="flex gap-4">
              <button
                style={{ backgroundColor: "#D0FF73", color: "#0A2A27" }}
                className="px-4 py-2 rounded-md font-heading font-bold"
              >
                Primary Button
              </button>
              <button
                style={{ backgroundColor: "#1A3C39", color: "#E0F7F5" }}
                className="px-4 py-2 rounded-md font-heading font-bold"
              >
                Dark Mint Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
