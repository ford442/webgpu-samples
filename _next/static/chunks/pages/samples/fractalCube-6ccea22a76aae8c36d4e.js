_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"1uVF":function(e,n,t){"use strict";t.d(n,"e",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return s}));var r=40,a=0,o=16,i=32,s=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},ZYMQ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/fractalCube",function(){return t("xsd4")}])},xsd4:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),a=t.n(r),o=t("HaE+"),i=t("IOcx"),s=t("1uVF"),c=t("PpzT"),u=t("SoUo");function l(){return(l=Object(o.a)(a.a.mark((function e(n){var t,r,o,u,l,m,d,g,p,v,x,h,b,w,C,T;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T=function(){var e=i.a.create();i.a.translate(e,e,i.b.fromValues(0,0,-4));var n=Date.now()/1e3;i.a.rotate(e,e,1,i.b.fromValues(Math.sin(n),Math.cos(n),0));var t=i.a.create();return i.a.multiply(t,l,e),t},e.next=3,navigator.gpu.requestAdapter();case 3:return t=e.sent,e.next=6,t.requestDevice();case 6:return r=e.sent,e.next=9,Object(c.a)();case 9:return o=e.sent,u=Math.abs(n.width/n.height),l=i.a.create(),i.a.perspective(l,2*Math.PI/5,u,1,100),m=n.getContext("gpupresent"),d=m.configureSwapChain({device:r,format:"bgra8unorm",usage:GPUTextureUsage.OUTPUT_ATTACHMENT|GPUTextureUsage.COPY_SRC}),g=r.createBuffer({size:s.d.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(g.getMappedRange()).set(s.d),g.unmap(),p=r.createRenderPipeline({vertexStage:{module:r.createShaderModule({code:f.vertex,transform:function(e){return o.compileGLSL(e,"vertex")}}),entryPoint:"main"},fragmentStage:{module:r.createShaderModule({code:f.fragment,transform:function(e){return o.compileGLSL(e,"fragment")}}),entryPoint:"main"},primitiveTopology:"triangle-list",depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},vertexState:{vertexBuffers:[{arrayStride:s.e,attributes:[{shaderLocation:0,offset:s.b,format:"float4"},{shaderLocation:1,offset:s.a,format:"float4"},{shaderLocation:2,offset:s.c,format:"float2"}]}]},rasterizationState:{cullMode:"back"},colorStates:[{format:"bgra8unorm"}]}),v=r.createTexture({size:{width:n.width,height:n.height,depth:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}),x={colorAttachments:[{attachment:void 0,loadValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{attachment:v.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},64,h=r.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),b=r.createTexture({size:{width:n.width,height:n.height,depth:1},format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.SAMPLED}),w=r.createSampler({magFilter:"linear",minFilter:"linear"}),C=r.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:w},{binding:2,resource:b.createView()}]}),e.abrupt("return",(function(){var e=T();r.defaultQueue.writeBuffer(h,0,e.buffer,e.byteOffset,e.byteLength);var t=d.getCurrentTexture();x.colorAttachments[0].attachment=t.createView();var a=r.createCommandEncoder(),o=a.beginRenderPass(x);o.setPipeline(p),o.setBindGroup(0,C),o.setVertexBuffer(0,g),o.draw(36,1,0,0),o.endPass(),a.copyTextureToTexture({texture:t},{texture:b},{width:n.width,height:n.height,depth:1}),r.defaultQueue.submit([a.finish()])}));case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={vertex:"#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\nlayout(location = 2) in vec2 uv;\n\nlayout(location = 0) out vec4 fragColor;\nlayout(location = 1) out vec2 fragUV;\n\nvoid main() {\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n  fragUV = uv;\n}",fragment:"#version 450\nlayout(set = 0, binding = 1) uniform sampler mySampler;\nlayout(set = 0, binding = 2) uniform texture2D myTexture;\n\nlayout(location = 0) in vec4 fragColor;\nlayout(location = 1) in vec2 fragUV;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  vec4 texColor = texture(sampler2D(myTexture, mySampler), fragUV * 0.8 + 0.1);\n\n  // 1.0 if we're sampling the background\n  float f = float(length(texColor.rgb - vec3(0.5, 0.5, 0.5)) < 0.01);\n\n  outColor = mix(texColor, fragColor, f);\n}"};n.default=Object(u.a)({name:"Fractal Cube",description:"This example uses the previous frame's rendering result                 as the source texture for the next frame.",slug:"fractalCube",init:function(e){return l.apply(this,arguments)},wgslShaders:{vertex:"\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : mat4x4<f32>;\n};\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> color : vec4<f32>;\n[[location(2)]] var<in> uv : vec2<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragColor : vec4<f32>;\n[[location(1)]] var<out> fragUV: vec2<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n  fragUV = uv;\n  return;\n}\n",fragment:"\n[[binding(1), set(0)]] var<uniform_constant> mySampler: sampler;\n[[binding(2), set(0)]] var<uniform_constant> myTexture: texture_sampled_2d<f32>;\n\n[[location(0)]] var<in> fragColor: vec4<f32>;\n[[location(1)]] var<in> fragUV: vec2<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  var texColor : vec4<f32> = textureSample(myTexture, mySampler, fragUV * 0.8 + 0.1) * fragPosition;\n  var f : f32 = f32(length(texColor.rgb - vec3(0.5, 0.5, 0.5)) < 0.01);\n  outColor = mix(texColor, fragColor, f);\n  return;\n}\n"},glslShaders:f,source:"import { mat4, vec3 } from 'gl-matrix';\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeColorOffset,\n  cubeUVOffset,\n  cubePositionOffset,\n} from '../../meshes/cube';\nimport glslangModule from '../../glslang';\nimport { makeBasicExample } from '../../components/basicExample';\n\nasync function init(canvas: HTMLCanvasElement) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n\n  const aspect = Math.abs(canvas.width / canvas.height);\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: 'bgra8unorm',\n    usage: GPUTextureUsage.OUTPUT_ATTACHMENT | GPUTextureUsage.COPY_SRC,\n  });\n\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    vertexStage: {\n      module: device.createShaderModule({\n        code: glslShaders.vertex,\n        transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n      }),\n      entryPoint: 'main',\n    },\n    fragmentStage: {\n      module: device.createShaderModule({\n        code: glslShaders.fragment,\n        transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n      }),\n      entryPoint: 'main',\n    },\n\n    primitiveTopology: 'triangle-list',\n    depthStencilState: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n    vertexState: {\n      vertexBuffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float4',\n            },\n            {\n              // color\n              shaderLocation: 1,\n              offset: cubeColorOffset,\n              format: 'float4',\n            },\n            {\n              // uv\n              shaderLocation: 2,\n              offset: cubeUVOffset,\n              format: 'float2',\n            },\n          ],\n        },\n      ],\n    },\n\n    rasterizationState: {\n      cullMode: 'back',\n    },\n\n    colorStates: [\n      {\n        format: 'bgra8unorm',\n      },\n    ],\n  });\n\n  const depthTexture = device.createTexture({\n    size: { width: canvas.width, height: canvas.height, depth: 1 },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.OUTPUT_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        attachment: undefined, // Attachment is set later\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n      },\n    ],\n    depthStencilAttachment: {\n      attachment: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const cubeTexture = device.createTexture({\n    size: { width: canvas.width, height: canvas.height, depth: 1 },\n    format: 'bgra8unorm',\n    usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.SAMPLED,\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: sampler,\n      },\n      {\n        binding: 2,\n        resource: cubeTexture.createView(),\n      },\n    ],\n  });\n\n  function getTransformationMatrix() {\n    const viewMatrix = mat4.create();\n    mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -4));\n    const now = Date.now() / 1000;\n    mat4.rotate(\n      viewMatrix,\n      viewMatrix,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n\n    const modelViewProjectionMatrix = mat4.create();\n    mat4.multiply(modelViewProjectionMatrix, projectionMatrix, viewMatrix);\n\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  return function frame() {\n    const transformationMatrix = getTransformationMatrix();\n    device.defaultQueue.writeBuffer(\n      uniformBuffer,\n      0,\n      transformationMatrix.buffer,\n      transformationMatrix.byteOffset,\n      transformationMatrix.byteLength\n    );\n\n    const swapChainTexture = swapChain.getCurrentTexture();\n    renderPassDescriptor.colorAttachments[0].attachment = swapChainTexture.createView();\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(36, 1, 0, 0);\n    passEncoder.endPass();\n\n    commandEncoder.copyTextureToTexture(\n      {\n        texture: swapChainTexture,\n      },\n      {\n        texture: cubeTexture,\n      },\n      {\n        width: canvas.width,\n        height: canvas.height,\n        depth: 1,\n      }\n    );\n\n    device.defaultQueue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst glslShaders = {\n  vertex: `#version 450\nlayout(set = 0, binding = 0) uniform Uniforms {\n  mat4 modelViewProjectionMatrix;\n} uniforms;\n\nlayout(location = 0) in vec4 position;\nlayout(location = 1) in vec4 color;\nlayout(location = 2) in vec2 uv;\n\nlayout(location = 0) out vec4 fragColor;\nlayout(location = 1) out vec2 fragUV;\n\nvoid main() {\n  gl_Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n  fragUV = uv;\n}`,\n\n  fragment: `#version 450\nlayout(set = 0, binding = 1) uniform sampler mySampler;\nlayout(set = 0, binding = 2) uniform texture2D myTexture;\n\nlayout(location = 0) in vec4 fragColor;\nlayout(location = 1) in vec2 fragUV;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  vec4 texColor = texture(sampler2D(myTexture, mySampler), fragUV * 0.8 + 0.1);\n\n  // 1.0 if we're sampling the background\n  float f = float(length(texColor.rgb - vec3(0.5, 0.5, 0.5)) < 0.01);\n\n  outColor = mix(texColor, fragColor, f);\n}`,\n};\n\nconst wgslShaders = {\n  vertex: `\n[[block]] struct Uniforms {\n  [[offset(0)]] modelViewProjectionMatrix : mat4x4<f32>;\n};\n[[binding(0), set(0)]] var<uniform> uniforms : Uniforms;\n\n[[location(0)]] var<in> position : vec4<f32>;\n[[location(1)]] var<in> color : vec4<f32>;\n[[location(2)]] var<in> uv : vec2<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n[[location(0)]] var<out> fragColor : vec4<f32>;\n[[location(1)]] var<out> fragUV: vec2<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  Position = uniforms.modelViewProjectionMatrix * position;\n  fragColor = color;\n  fragUV = uv;\n  return;\n}\n`,\n\n  fragment: `\n[[binding(1), set(0)]] var<uniform_constant> mySampler: sampler;\n[[binding(2), set(0)]] var<uniform_constant> myTexture: texture_sampled_2d<f32>;\n\n[[location(0)]] var<in> fragColor: vec4<f32>;\n[[location(1)]] var<in> fragUV: vec2<f32>;\n[[location(0)]] var<out> outColor : vec4<f32>;\n\n[[stage(fragment)]]\nfn main() -> void {\n  var texColor : vec4<f32> = textureSample(myTexture, mySampler, fragUV * 0.8 + 0.1) * fragPosition;\n  var f : f32 = f32(length(texColor.rgb - vec3(0.5, 0.5, 0.5)) < 0.01);\n  outColor = mix(texColor, fragColor, f);\n  return;\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Fractal Cube',\n  description:\n    \"This example uses the previous frame's rendering result \\\n                as the source texture for the next frame.\",\n  slug: 'fractalCube',\n  init,\n  wgslShaders,\n  glslShaders,\n  source: __SOURCE__,\n});\n"})}},[["ZYMQ",0,1,4,2,3,5]]]);